import RideOverview from '../components/RideOverview'
import TopDriver from '../components/TopDriver'
import DataTable from '../components/DataTable'
import StatusBadge from '../components/StatusBadge'
import ridesData from '../lib/ridesData'
import DummyTable from '../components/DummyTable'

const Dashboard = () => {

    const driverColumns = [
    { key: "rideid", label: "Ride ID" },
    { key: "driver", label: "Driver" },
    { key: "rider", label: "Rider" },
    { key: "fare", label: "Fare" },
    { 
      key: "status", 
      label: "Status",
      render: (row) => <StatusBadge label={row.status} />
    },
  ];

  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] justify-center bg-gray-100'>
        <div>
            <div className='overflow-hidden p-2'>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Ride Overview
                </h2>
                <RideOverview icon={"w"} title={"Top Rides"} color='blue' className='min-w-56'/>
                <RideOverview icon={"w"} title={"Top Rides"} color='red' className='min-w-56'/>
                <RideOverview icon={"w"} title={"Top Rides"} color='yellow' className='min-w-56'/>
            </div>
            <div className='bg-gray-300'></div>
        </div>
        <div className='flex flex-col justify-center p-2'>
            <h2 className="text-2xl font-bold text-gray-600 mb-2 text-left">
                Top Drivers
            </h2>
            <TopDriver name={"Rahul Sharma"} contact={"+91-9986543483"} orders={5} currency={"$"} income={91.0} className='bg-white px-2 py-3'/>
            <TopDriver name={"Rahul Sharma"} contact={"+91-9986543483"} orders={5} currency={"$"} income={91.0} className='bg-white px-2 py-3'/>
            <TopDriver name={"Rahul Sharma"} contact={"+91-9986543483"} orders={5} currency={"$"} income={91.0} className='bg-white px-2 py-3'/>
            <TopDriver name={"Rahul Sharma"} contact={"+91-9986543483"} orders={5} currency={"$"} income={91.0} className='bg-white px-2 py-3'/>
        </div>
    </div>
    <div>
        <div className='p-4 bg-white'>
            <h1 className='text-lg font-bold'>RECENT RIDES</h1>
        </div>
        {/* <DataTable columns={driverColumns} data={ridesData} showActions={false}/> */}
        <DummyTable columns={driverColumns} data={ridesData} showActions={false}/>
    </div>
    </>
  )
}

export default Dashboard