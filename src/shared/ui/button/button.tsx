type Props = {
    text?: string,
    children: React.ReactNode
}

export const Button = ({ children, text, ...props }:Props) => {
  return (
    <button
    {...props}
    >
      {text}
    </button>
  )
}
