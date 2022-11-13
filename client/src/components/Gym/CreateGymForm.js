import React, {useState} from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { DatePicker } from 'rsuite';

const styles = { width: 260};

const users = [
  { label:'Abhinandan Mishra', value:'abhinandan_mishra_1'},
  { label: 'Ekansh Saxena', value: 'ekansh_saxena_1'},
  { label: 'Vinay Kushwaha', value: 'vinay_kushwaha_1'},
];

const Platforms = [
  { label: 'Leetcode', value: 'leetcode' },
  { label: 'Codechef', value: 'codechef' },
  { label: 'Codeforces', value: 'codeforces' },
  { label: 'HackerRank', value: 'hackerrank' }
];

const DateRangePicker = () => {
  return (
    <div class="flex justify-between">
      <DatePicker size="md" placeholder="Start Date" style={styles} />
      <DatePicker size="md" placeholder="End Date" style={styles} />
    </div>
  );
};


const animatedComponents = makeAnimated();

function SelectComponent({options,isMulti,defaultValue}) {
  return (
    <Select
      closeMenuOnSelect={false}
      isMulti={isMulti}
      components={animatedComponents}
      options={options}
      defaultValue={defaultValue}
    />
  );
}

const AddProblem = ()=> {
  return (
    <div className='flex flex-col mt-2'>
      <div className='flex w-full justify-between'>
          <label for="gyaName" className="w-1/4 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Problem Name</label>
          <label for="gyaName" className="w-1/4 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Problem Link</label>
          <label for="gyaName" className="w-1/4 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Platform</label>
      </div>
      <div className='flex w-full justify-between'>
        <input type="text" id="gymName" className="w-1/4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
        <input type="text" id="gymName" className="w-1/3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="" />
        <SelectComponent default={Platforms[0]} options={Platforms} />
      </div>
    </div>
  )
}

const CreateGymForm = () => {
  const [problems, setProblems] = useState([{}]);
  return (
    <div className='w-2/5 mr-4'>
      <h1 className='text-2xl text-center'>
        Create Gym 
      </h1>

    <form>
      <div className="mb-6">
        <label for="gyaName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gym Name</label>
        <input type="text" id="gymName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="PM Gym-01" required="" />
      </div>
      <div className="mb-6">
        <DateRangePicker />
      </div>
      <div className="mb-6">
        <SelectComponent options={users} isMulti={true}/>
      </div>
      <div className="mb-6">
        {
          problems.map((problem, index) => {
            return (
              <AddProblem />
            )
          }
          )
        }
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create</button>
      <div onClick={()=>setProblems(problems => [...problems,{}])} className='ml-2 inline-block cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Add a problem</div>
    </form>
    </div>
  )
}

export default CreateGymForm