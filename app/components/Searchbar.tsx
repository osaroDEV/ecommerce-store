'use client'
import { useRouter } from 'next/navigation';
import { IoSearchSharp } from "react-icons/io5";

const Searchbar = () => {
  const router = useRouter()

const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  const item = formData.get('item') as string

  if (item) {
    router.push(`/list?item=${item}`)
  }

}

  return (
    <form className='flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1' onSubmit={handleSearch}>
      <input type="text" name='item' placeholder='search' className='flex-1 bg-transparent outline-none' />
      <button className='cursor-pointer'>
      <IoSearchSharp />
      </button>
    </form>
  )
}

export default Searchbar