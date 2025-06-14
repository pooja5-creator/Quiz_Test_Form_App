import React, { useEffect, useRef, useState } from 'react';
import InputBox from './InputBox';
import SelectTypeBox from './SelectTypeBox';
import SelectTagBox from './SelectTagBox';
import CurriculumCard from './CurriculumCard';
import { gsap } from 'gsap';
import Button from './Button';

export default function Form({ isDark }) {
  const repelRefs = useRef([]);

  const userTypes = ['Student', 'College', 'Other'];
  const [selectedUserType, setSelectedUserType] = useState('Student');
  const [selectedCurriculum, setSelectedCurriculum] = useState('k12');
  const [error, setError] = useState('');

  const [title, setTitle] = useState('');
  const [grade, setGrade] = useState('');
  const [subject, setSubject] = useState('');
  const [marks, setMarks] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const gradeOptions = ['9th', '10th', '11th', '12th'];
  const roles = ['Intern', 'Junior'];

  const gradeToSubjects = {
    '9th': ['Math', 'English'],
    '10th': ['Science', 'History'],
    '11th': ['Physics', 'Chemistry', 'Biology'],
    '12th': ['Math', 'English', 'Computer Science']
  };

  const handleGradeChange = (newGrade) => {
    setGrade(newGrade);
    setSubject('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    console.log({ selectedUserType, selectedCurriculum, title, grade, subject, marks, difficulty });
    setTitle('');
    setGrade('');
    setSubject('');
    setMarks('');
    setDifficulty('');
  };

  // 👇 Auto select first curriculum based on selected user type
  useEffect(() => {
    if (selectedUserType === 'Student') {
      setSelectedCurriculum('k12');
    } else if (selectedUserType === 'College') {
      setSelectedCurriculum('campus');
    } else if (selectedUserType === 'Other') {
      setSelectedCurriculum('freelance');
    }
  }, [selectedUserType]);

  return (
    <div className='w-full min-h-[100px] flex justify-center items-center flex-col gap-2'>
      <h1 className={`text-semibold rounded-2xl px-8 py-5 border-[1px] border-gray-100 
        text-center font-semibold text-[18px] smallHeading 
        ${!isDark ? "bg-white text-zinc-900" : "bg-zinc-900 text-white"}`}>
        Structured Test
      </h1>

      {/* User Type Buttons */}
      <div className="my-5 w-full px-2 lg:w-[50%] h-[100px] flex justify-center items-center gap-[20px] sm:gap-[50px] rounded-2xl">
        {userTypes.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedUserType(type)}
            className={`rounded-2xl border text-[15px] font-semibold transition-all duration-200 w-[200px] h-[80px]
              ${selectedUserType === type ? 'bg-zinc-900 text-teal-300 boxShadow' :
                 'bg-white text-gray-800'}`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Curriculum Cards */}
      <div className="w-full flex flex-wrap justify-center gap-10 px-6 py-[10px] 
      min-h-[200px]">
        {selectedUserType === 'Student' && (
          <>
            <CurriculumCard title="K-12 Curriculums" tags={['CBSE']} onClick={() => setSelectedCurriculum('k12')} selected={selectedCurriculum === 'k12'} />
            <CurriculumCard title="Corporate Hiring" tags={['Aptitude', 'Programming', "English Comprehension", "and many more.."]} onClick={() => setSelectedCurriculum('corporate')} selected={selectedCurriculum === 'corporate'} />
          </>
        )}
        {selectedUserType === 'College' && (
          <>
            <CurriculumCard title="Campus Placements" tags={['DSA', 'Comms']} onClick={() => setSelectedCurriculum('campus')} selected={selectedCurriculum === 'campus'} />
            <CurriculumCard title="Internships" tags={['Frontend', 'Backend']} onClick={() => setSelectedCurriculum('internship')} selected={selectedCurriculum === 'internship'} />
          </>
        )}
        {selectedUserType === 'Other' && (
          <CurriculumCard title="Freelancer Test" tags={['Design', 'Marketing']} onClick={() => setSelectedCurriculum('freelance')} selected={selectedCurriculum === 'freelance'} />
        )}
      </div>

      {/* Main Form */}
      <form
        onSubmit={handleSubmit}
        className={`w-[95%] lg:w-[70%] mt-10 ${!isDark ? 'bg-white' : 'bg-zinc-900 text-white'} min-h-[200px] rounded-[10px] px-[20px] sm:px-[70px] py-[40px] space-y-4`}
      >
        <InputBox title={title} setTitle={setTitle} error={error} />

        {(selectedCurriculum === 'k12' || selectedCurriculum === 'campus' || selectedCurriculum === 'internship') && (
          <div className='flex flex-col sm:flex-row gap-4'>
            {selectedCurriculum === 'k12' && (
              <>
                <SelectTagBox roles={gradeOptions} labelName='Select Grade' value={grade} setValue={handleGradeChange} />
                <SelectTagBox roles={gradeToSubjects[grade] || []} labelName='Select Subject' value={subject} setValue={setSubject} />
                <SelectTypeBox labelName='Marks' options={['1 Mark', '2 Mark']} value={marks} setValue={setMarks} />
              </>
            )}
            {selectedCurriculum === 'campus' && (
              <>
                <SelectTypeBox labelName='Skill' options={['DSA', 'DBMS']} value={subject} setValue={setSubject} />
                <SelectTagBox roles={roles} labelName='Difficulty' value={difficulty} setValue={setDifficulty} />
              </>
            )}
            {selectedCurriculum === 'internship' && (
              <>
                <SelectTypeBox labelName='Domain' options={['Frontend', 'Backend']} value={subject} setValue={setSubject} />
                <SelectTagBox roles={roles} labelName='Difficulty' value={difficulty} setValue={setDifficulty} />
              </>
            )}
          </div>
        )}

        {selectedCurriculum === 'corporate' && (
          <>
            <SelectTypeBox labelName='Subject' options={['Aptitude', 'Programming']} value={subject} setValue={setSubject} />
            <SelectTagBox roles={roles} labelName='Difficulty' value={difficulty} setValue={setDifficulty} />
          </>
        )}

        {selectedCurriculum === 'freelance' && (
          <SelectTypeBox labelName='Service Type' options={['Design', 'Marketing']} value={subject} setValue={setSubject} />
        )}

        <Button />
      </form>
    </div>
  );
}
