'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import { sendContactEmail } from '@/service/contact';
import ContactMessage, { bannerData } from '@/app/(main)/contact/components/ContactMessage';

type Form = {
  from: string;
  subject: string;
  message: string;
};
const DEFAULT_DATA = { from: '', subject: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<bannerData | null>(null);
  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form) //
      .then(() => {
        setBanner({ message: '메일을 전송 하였습니다.', state: 'success' });
        setForm(DEFAULT_DATA);
      })
      .catch(() => {
        setBanner({ message: '메일을 전송에 실패하였습니다. 다시 시도 해주세요.', state: 'error' });
      })
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };
  return (
    <>
      <section className="z-10 mx-auto mt-24 w-full max-w-md">
        <h2 className="text-textColor dark:text-darkTextColor font-roboto relative mb-8 text-center text-6xl">
          CONTACT ME
        </h2>
        {banner && <ContactMessage banner={banner} />}
        <div className="bg-bgColor dark:bg-darkBgColor inset-shadow-l2 dark:inset-shadow-d2 text-textColor dark:text-darkTextColor h-3/4 overflow-y-auto rounded-md px-6 py-9">
          <form className="flex flex-col gap-5" autoComplete="off" onSubmit={onSubmit}>
            <div className="flex flex-col gap-1">
              <label className="font-rajdhani text-lg" htmlFor="from">
                Your Email
              </label>
              <input
                className="outline-borderColor dark:outline-darkBorderColor w-full rounded-sm outline"
                type="email"
                id="from"
                name="from"
                required
                autoFocus
                value={form.from}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-rajdhani text-lg" htmlFor="subject">
                Subject
              </label>
              <input
                className="outline-borderColor dark:outline-darkBorderColor rounded-sm outline"
                type="text"
                id="subject"
                name="subject"
                required
                value={form.subject}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-rajdhani text-lg" htmlFor="message">
                Message
              </label>
              <textarea
                className="font-noto outline-borderColor dark:outline-darkBorderColor h-5/6 rounded-sm outline"
                rows={10}
                id="message"
                name="message"
                required
                value={form.message}
                onChange={onChange}
              />
            </div>
            <button
              className="font-rajdhani bg-Yellow text-darkBgColor border-Yellow hover:bg-customYellow dark:border-darkBorderColor cursor-pointer rounded-md border text-lg transition"
              type={'submit'}
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
