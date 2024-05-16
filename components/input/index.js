import Link from "next/link";

export const Input = ({type, placeholder, id, width, icon}) => {
  return (
      <>
          <div className={`${type !== "password" && "mb-4"} ${width} flex items-center relative`}>
              {icon && (
                  <div className="absolute mr-2 w-10 text-gray-secondary pl-4">
                      {icon}
                  </div>
              )}
              <input
                  type={type}
                  id={id}
                  placeholder={placeholder}
                  className={`border border-gray-400 rounded-lg p-3 pl-14 w-full focus:outline-none`}/>
          </div>

          {type === "password" && (
              <Link href="/" className="mt-1 text-gray-secondary text-sm underline self-end" >Olvidé mi contraseña</Link>
          )}
      </>
  )
}