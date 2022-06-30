// import { useState } from "react"
// import useToggleDay, { useToggleMonth } from "../Hooks/ToggleDob"
// import { useSetDay, useSetMonth } from "../Hooks/useSetDob";

// const MonthDropDown = () => {

//     const [monthToggle, setMonthToggle] = useToggleMonth();
//     const [dayToggle, setDayToggle] = useToggleDay()
//     const [month, SetMonth] = useSetMonth('month');
//     const [day, setDay] = useSetDay()

//     let monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//     return (
//         <>
//             {!monthToggle ? (
//                 <div id='month' name='month' className='dob-button' onClick={e => {
//                     e.preventDefault();
//                     if (dayToggle) { setDayToggle(false); }
                                
//                     if (monthToggle) { setMonthToggle(false); }
//                     else setMonthToggle(true)
//                 }}>
//                     <span className='button-span'><p>{month}</p>\/</span>
//                 </div>
//             ) : (
//                 <div>
//                     <div id='month' name='month' className='dob-button' onClick={e => {
//                         e.preventDefault();
//                         if (dayToggle) { setDayToggle(false); }
                                
//                         if (monthToggle) { setMonthToggle(false); }
//                         else setMonthToggle(true)
                        
//                     }}>
//                         <span className='button-span'><p>{month}</p>\/</span>
//                     </div>
//                     <span className='dd-span'>
//                         <div className='dd-container'>
//                             <p className='list-items' onClick={e => { e.preventDefault(); SetMonth('Month'); setMonthToggle() }}></p>
//                             <ul>
//                                 {monthArray.map((months, id) => {
//                                     return (
//                                         <li className='list-items' key={id} onClick={e => { e.preventDefault(); SetMonth([months]); setMonthToggle(false) }}>
//                                             <span className='list-items'>
//                                                 {months}
//                                             </span>
//                                         </li>
//                                     )
//                                 })}
//                             </ul>
//                         </div>
//                     </span >
//                 </div>
//             )
//             }
//         </>
//     )
// }

// export default MonthDropDown