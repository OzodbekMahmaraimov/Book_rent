
const Button = ({ title = "change", onClick, className }) => {
  return (
    <>
    <button onClick={onClick} className={`${className} py-3 px-10 border-0 outline-0 text-white font-semibold rounded-lg bg-gradient-to-r from-green-400 to-indigo-600`}>
        {title}
    </button>
    </>
  )
}

export default Button