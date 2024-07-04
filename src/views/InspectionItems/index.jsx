import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function InspectionItems() {
  const availableData = [{
    carName: '2021 Alfa romeo giulia',
    companyName: 'GoGo Motor',
     referenceNum: 'PROD-3631',
     date: '20 May 2024 00:00',
     location: 'JED-DEL',
     percentage: 68
  }, 
  {
    carName: '0 Nissan sunny',
    companyName: 'Abubker',
     referenceNum: 'EUNSp8a1',
     date: '09 May 2024 15:25',
     location: 'JED-DEL',
     percentage: 100
  },
  {
    carName: '2019 Chevrolet sprak',
    companyName: 'GoGo Motor',
     referenceNum: 'PROD-3373',
     date: '21 Mar 2024 00:00',
     location: 'JED-DEL',
     percentage: 100
  },
  {
    carName: '2021 Alfa romeo giulia',
    companyName: 'GoGo Motor',
     referenceNum: 'PROD-3631',
     date: '20 May 2024 00:00',
     location: 'JED-DEL',
     percentage: 94
  }, 
  {
    carName: '0 Nissan sunny',
    companyName: 'Abubker',
     referenceNum: 'EUNSp8a1b',
     date: '09 May 2024 15:25',
     location: 'JED-DEL',
     percentage: 57
  },
  {
    carName: '2019 Chevrolet sprak',
    companyName: 'GoGo Motor',
     referenceNum: 'PROD-3373',
     date: '21 Mar 2024 00:00',
     location: 'JED-DEL',
     percentage: 94
  }]
  return (
    availableData.map((item, index) =>  (
      <div className="grid grid-cols-12 gap-2 border-b border-slate-300">
      <div className="col-span-2 justify-center items-center flex">0{index + 1}</div>
      <div className="col-span-8 flex pt-3 pb-3">
        <div className="flex flex-col">
          <h5 className="uppercase text-sm font-bold mt-1">{item.carName}</h5>
          <h5 className="capitalize text-base text-slate-500 mt-1 mb-1">{item.companyName}</h5>
          <div className="grid grid-cols-12 gap-2">
            <div className="flex items-center col-span-6">
              <FontAwesomeIcon icon={faCircleCheck} color='#64748b' size='1x'/>
              <h5 className="ml-2 text-xs text-slate-500 mt-1 mb-1">Ref: &nbsp; {item.referenceNum}</h5>
            </div>
            <div className="flex items-center col-span-6">
              <FontAwesomeIcon icon={faClock} color='#64748b' size='1x'/>
              <h5 className="ml-2 capitalize text-xs text-slate-500 mt-1 mb-1">{item.date}</h5>
            </div>
          </div>
          <div className="flex items-center col-span-6">
              <FontAwesomeIcon icon={faLocationDot} color='#64748b' size='1x'/>
              <h5 className="ml-2 text-xs text-slate-500 mt-1 mb-1">{item.location}</h5>
            </div>
        </div>
      </div>
      <div className="col-span-2 justify-center items-center flex">
        <div className='h-12 w-12'>
          <CircularProgressbar
            strokeWidth={12}
            value={item.percentage}
            text={`${item.percentage}%`}
            styles={buildStyles({
              textSize: '16px',
              pathColor: '#004494',
              textColor: '#000',
            })}
          />
        </div>
      </div>
    </div>
    ))
)};