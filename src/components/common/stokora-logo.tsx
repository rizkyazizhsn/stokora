import Image from "next/image"

const StokoraLogo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Image src="/logo/kolabora-logo.png" alt="Stokora Logo" width={36} height={36} className="shadow-md rounded-lg border border-gray-300 rotate-12" />
      <span className="hidden lg:block text-xl font-semibold text-gray-900">StoKora Dashboard</span>
    </div>
  )
}

export default StokoraLogo