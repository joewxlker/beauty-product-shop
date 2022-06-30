// import { useToggleYear } from "../Hooks/ToggleDob";
// import { useSetYear } from "../Hooks/useSetDob";


// const YearDropDown = () => {

//     const [yearToggle, setYearToggle] = useToggleYear()
//     const [year, SetYear] = useSetYear()

//     let yearArray = [];
//     for (let i = 1960; i <= 2022; i++) {
//         yearArray.push(i);
//     }

//         return (
//             <>
//                 {!yearToggle ? (
//                         <div id='year' className='dob-button' onClick={e => {
//                             e.preventDefault();
//                             // setDayToggle(false);
//                             // setMonthToggle(false);
//                             if (yearToggle) setYearToggle(false)
//                             else setYearToggle(true)
//                         }}>
//                             <span className='button-span'><p>{year}</p>\/</span>
//                         </div>
//                 ) : (
//                     <div>
//                         <div id='year' className='dob-button' onClick={e => {
//                             e.preventDefault();
//                             // setDayToggle(false);
//                             // setMonthToggle(false);
//                             if (yearToggle) setYearToggle(false)
//                             else setYearToggle(true)
//                         }}>
//                             <span className='button-span'><p>{year}</p>\/</span>
//                         </div>
//                         <span className='dd-span'>
//                             <div className='dd-container'>
//                                 <p className='list-items' onClick={e => { e.preventDefault(); SetYear('Year'); setYearToggle(false) }}>{year}</p>
//                                 <ul>
//                                     {yearArray.map((years, id) => {
//                                         return (
//                                             <li className='list-items' key={id} onClick={e => { e.preventDefault(); SetYear([years]); setYearToggle(false) }}>
//                                                 <span className='list-items'>
//                                                     {years}
//                                                 </span>
//                                             </li>
//                                         )
//                                     })}
//                                 </ul>
//                             </div >
//                         </span>
//                     </div>
//                 )}
//             </>
//         )
// }

// export default YearDropDown