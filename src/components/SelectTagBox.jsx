
export default function SelectTagBox({roles,labelName ,value, setValue }) {
  
  return (
    <div className="w-full mx-auto mt-3">
      <label className='font-semibold'>
       {labelName}
      </label>
      <select
        value={value} onChange={(e) => setValue(e.target.value)}
        className='w-full py-3 px-3 outline-none border-[1px] border-gray-900 rounded-[10px]
         mt-1 bg-white text-gray-900 '
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
