// import { useEffect, useState } from 'react';
// import { useToggleDay, useToggleMonth } from '../Hooks/ToggleDob'
// import { useSetDay, useSetMonth } from '../Hooks/useSetDob';

// const DayDropDown = () => {

//     const [dayToggle, setDayToggle] = useToggleDay();
//     const [monthToggle,setMonthToggle] = useToggleMonth();
//     const [day, setDay] = useSetDay()
//     const [month] = useSetMonth();
//     const [dayCount, setDayCount] = useState(31)

//     let dayArray = [];
//     let smallMonths = ['September', 'June', 'April', 'June', 'November']
//     for (let i = 1; i <= dayCount; i++) {
//         dayArray.push(i);
//     }
//     useEffect(() => {
//         if (month[0] === 'February') { setDayCount(29) }
//         for (let v in smallMonths) {
//             if (month[0] === smallMonths[v] && day > 30) { setDayCount(30) };
//         }
//         if (month[0] !== 'February' && month[0] !== smallMonths) { setDayCount(31); }
//     }, [day, month])
    
//     return (
//         <>
//             {!dayToggle ? (
//                 <>
//                     <div id='day' className='dob-button' onClick={e => {
//                         e.preventDefault();
//                         if(monthToggle){setMonthToggle(false);}
                                
//                         if (dayToggle) { setDayToggle(false); }
//                         else setDayToggle(true)
//                     }}>
//                         <span className='button-span'><p>{day}</p>\/</span>
//                     </div>
//                 </>
//             ) : (
//                 <>
//                     <div id='day' className='dob-button' onClick={e => {
//                         e.preventDefault();
//                         setMonthToggle();
//                         setDayToggle();
//                     }}>
//                         <span className='button-span'><p>{day}</p>\/</span>
//                     </div>
//                     <span className='dd-span'>
//                         <div className='dd-container'>
//                             <p className='list-items' onClick={e => { e.preventDefault(); setDay('day'); setDayToggle() }}>day</p>
//                             <ul>
//                                 {dayArray.map((days, id) => {
//                                     return (
//                                         <li className='list-items' key={id} onClick={e => { e.preventDefault(); setDay([days]); setDayToggle(false) }}>
//                                             <span className='list-items'>
//                                                 {days}
//                                             </span>
//                                         </li>
//                                     )
//                                 })}
//                             </ul>
//                         </div>
//                     </span>
//                 </>
//             )
//             }
//         </>
//     );
// }

// export default DayDropDown;
