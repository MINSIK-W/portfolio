export type bannerData = {
  message: string;
  state: 'success' | 'error';
};

export default function ContactMessage({ banner: { message, state } }: { banner: bannerData }) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '✅' : '🥲';
  return (
    <p
      className={`${isSuccess} ? ' bg-customGreen border-Green ': 'bg-customRed border-Red' font-noto text-textColor mx-auto my-5 rounded-md border py-2 text-center font-bold`}
    >{`${icon} ${message}`}</p>
  );
}
