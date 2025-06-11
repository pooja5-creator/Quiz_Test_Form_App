import Form from './Form'

export default function Test() {
  return (
    <div className='max-w-[1200px] min-h-[200px] pt-[50px] pb-[10px] mx-auto flex justify-center items-center flex-col gap-5'>
    <h1 className='text-gray-900 text-[28px] sm:text-3xl font-bold text-center leading-8'>Effortless Test Creation with Smart Blueprints</h1>
    <p className=' text-emerald-400 text-[18px] sm:text-[20px] capitalize w-[90%] sm:w-[80%] xl:w-[40%] text-center'>Generate tests instantly using standard blueprints for academics and hiring</p>
    <div className='w-full h-[1px] backgroundColor'></div>
    <div className='w-full min-h-[200px] mt-5 py-[10px]'>
       <Form/> 
    </div>
    </div>
  )
}
