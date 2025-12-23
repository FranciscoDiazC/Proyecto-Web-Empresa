interface Props {
  link: string,
  text: string,
}

export const WspContactButton = ({link, text}: Props) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"> {/* noopener evita tabnapping, seguridad | noreferrer Oculta la URL de origen | */}
      <div className="flex flex-row items-center gap-4 bg-card rounded-xl px-6 py-1 border-2 border-border drop-shadow-[0px_0px_10px_rgba(6,182,212,1)]">
        <div className="text-[clamp(1.3rem,2.5vw,1.65rem)] text-card-foreground font-bold text-center">
          {text}
        </div>
        <img
          src="/WhatsApp.svg"
          className="w-[clamp(50px,6vw,70px)] h-auto cursor-pointer drop-shadow-[4px_4px_10px_rgba(0,0,0,0.75)]"
          alt="WhatsApp"
        />
      </div>
    </a>
  )
}
