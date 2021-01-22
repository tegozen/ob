export function Wrapper({ children }) {
  return (
    <div class="w-full flex justify-center">
      <div class="w-full max-w-screen-lg h-20 p-5">{children}</div>
    </div>
  )
}

export default Wrapper;