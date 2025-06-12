import React, { useEffect, useRef, useState } from 'react';
import InputBox from './InputBox';
import SelectTypeBox from './SelectTypeBox';
import SelectTagBox from './SelectTagBox';
import CurriculumCard from './CurriculumCard';
import { gsap } from 'gsap';
import Button from './Button';

export default function Form() {
    const repelRefs = useRef([]);
  const roles = ['Intern', 'Junior'];
  const gradeOptions = ['9th', '10th', '11th', '12th'];
  const corporateSubjects = ['Math', 'English', 'Physics', 'Chemistry'];
  const marksOptions = ['1 Mark', '2 Mark'];

  const [selectedCurriculum, setSelectedCurriculum] = useState('k12');
  const [error, setError] = useState('');

  // K-12 Form States
  const [k12Title, setK12Title] = useState('');
  const [k12Grade, setK12Grade] = useState('');
  const [k12Subject, setK12Subject] = useState('');
  const [k12Marks, setK12Marks] = useState('');
  const [k12Users, setK12Users] = useState([]);

  // Corporate Form States
  const [corpTitle, setCorpTitle] = useState('');
  const [corpSubject, setCorpSubject] = useState('');
  const [corpDifficulty, setCorpDifficulty] = useState('');
  const [corporateUsers, setCorporateUsers] = useState([]);

  const gradeToSubjects = {
    '9th': ['Math', 'English'],
    '10th': ['Science', 'History'],
    '11th': ['Physics', 'Chemistry', 'Biology'],
    '12th': ['Math', 'English', 'Computer Science']
  };

  const handleGradeChange = (newGrade) => {
    setK12Grade(newGrade);
    setK12Subject('');
  };

  const resetK12Form = () => {
    setK12Title('');
    setK12Grade('');
    setK12Subject('');
    setK12Marks('');
  };

  const resetCorporateForm = () => {
    setCorpTitle('');
    setCorpSubject('');
    setCorpDifficulty('');
  };

  const handleK12Submit = () => {
    if (!k12Title.trim()) {
      setError('Title is required');
      return;
    }

    const newUser = {
      curriculum: 'k12',
      title: k12Title,
      grade: k12Grade,
      subject: k12Subject,
      marks: k12Marks
    };

    setK12Users([...k12Users, newUser]);
    console.log('K-12 Users:', [...k12Users, newUser]);
    resetK12Form();
  };

  const handleCorporateSubmit = () => {
    if (!corpTitle.trim()) {
      setError('Title is required');
      return;
    }

    const newUser = {
      curriculum: 'corporate',
      title: corpTitle,
      subject: corpSubject,
      difficulty: corpDifficulty
    };

    setCorporateUsers([...corporateUsers, newUser]);
    console.log('Corporate Users:', [...corporateUsers, newUser]);
    resetCorporateForm();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    selectedCurriculum === 'k12' ? handleK12Submit() : handleCorporateSubmit();
  };
  



  return (
    <div className='w-full min-h-[100px] flex justify-center items-center flex-col 
    gap-2 '>
      <h1 
      className='text-semibold  text-zinc-900 rounded-2xl px-8 py-5 bg-white border-[1px] border-gray-100
      text-center font-semibold text-[18px] smallHeading  '>
        Structured Test
      </h1>

      {/* Curriculum Select */}
      <div className="w-full flex flex-wrap justify-center gap-10 px-6 py-[30px]">
        <CurriculumCard
          title="K-12 Curriculums"
          tags={['CBSE']}
          onClick={() => setSelectedCurriculum('k12')}
          selected={selectedCurriculum === 'k12'}
        />
        <CurriculumCard
          title="Corporate Hiring"
          tags={['Aptitude', 'English Comprehension', 'Programming', 'and many more..']}
          onClick={() => setSelectedCurriculum('corporate')}
          selected={selectedCurriculum === 'corporate'}
        />
      </div>

      {/* K-12 Form */}
      {selectedCurriculum === 'k12' && (
        <form onSubmit={handleSubmit} className='w-[95%] lg:w-[70%] bg-white
         min-h-[200px] rounded-[10px] px-[10px] sm:px-[70px] py-[40px] space-y-4'>
          <InputBox title={k12Title} setTitle={setK12Title} error={error} />

          <div className='w-full h-auto flex justify-between items-center gap-2 sm:gap-5 flex-col sm:flex-row'>
            <SelectTagBox
            ref={(el) => (repelRefs.current[1] = el)}
              roles={gradeOptions}
              labelName='Select Grade'
              value={k12Grade}
              setValue={handleGradeChange}
            />
            <SelectTagBox
             ref={(el) => (repelRefs.current[2] = el)}
              roles={gradeToSubjects[k12Grade] || []}
              labelName='Select Subject'
              value={k12Subject}
              setValue={setK12Subject}
            />
          </div>

          <SelectTypeBox
            labelName='Select Marks'
            options={marksOptions}
            value={k12Marks}
            setValue={setK12Marks}
          />
         <Button/>
        </form>
      )}

      {/* Corporate Form */}
      {selectedCurriculum === 'corporate' && (
        <form onSubmit={handleSubmit} className='w-[95%] lg:w-[70%] bg-white
         min-h-[200px] rounded-[10px] px-[20px] sm:px-[70px] py-[40px] space-y-4'>
          <InputBox title={corpTitle} setTitle={setCorpTitle} error={error} />
          <SelectTypeBox
            labelName='Question Type'
            options={corporateSubjects}
            value={corpSubject}
            setValue={setCorpSubject}
          />
          <SelectTagBox
           ref={(el) => (repelRefs.current[3] = el)}
            labelName="Select Difficulty Level"
            roles={roles}
            value={corpDifficulty}
            setValue={setCorpDifficulty}
          />

         <Button/>
         
        </form>
      )}
    </div>
  );
}
