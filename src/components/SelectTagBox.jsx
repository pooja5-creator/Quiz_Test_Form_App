
export default function SelectTagBox({roles,labelName ,value, setValue },ref) {
  
  return (
    <div className="w-full mx-auto mt-3" ref={ref}>
      <label className='font-semibold'>
       {labelName}
      </label>
      <select
        value={value} onChange={(e) => setValue(e.target.value)}
        className='w-full py-3 px-3 outline-none
        rounded-[10px] border-[1px] border-teal-200
         mt-1 bg-white text-zinc-900 '
      >
        <option value="" disabled>
          -- Choose a role --
        </option>
        {roles.map((role, index) => (
          <option key={index} value={role}>
            {role}
          </option>
        ))}
      </select>

    </div>
  );
}
