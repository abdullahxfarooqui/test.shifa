import Link from "next/link";

type ContactBandProps = {
  phone: string;
  whatsapp?: string;
  extra?: string;
};

export function ContactBand({ phone, whatsapp, extra }: ContactBandProps) {
  return (
    <section className="mx-auto my-10 max-w-7xl rounded-2xl border border-slate-200 bg-[#f7fbff] px-4 py-4 sm:px-6">
      <div className="flex flex-wrap items-center gap-4 text-sm text-slate-700">
        <span className="font-semibold text-slate-900">Need help now?</span>
        <Link href={`tel:${phone.replace(/[^+\d]/g, "")}`} className="font-semibold text-[#0b5fa5]">
          {phone}
        </Link>
        {whatsapp ? (
          <Link href={whatsapp} className="font-semibold text-[#0b5fa5]" target="_blank" rel="noreferrer">
            WhatsApp
          </Link>
        ) : null}
        {extra ? <span>{extra}</span> : null}
      </div>
    </section>
  );
}
