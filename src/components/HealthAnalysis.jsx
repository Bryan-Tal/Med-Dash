import { useEffect ,useState, useCallback } from 'react'
import { getDays } from '~/utils/core'
import { day } from '~/utils/day'
import DateRangePicker from '~/components/DatePicker'
import Chart from '~/components/Chart'
import ShowData from '~/components/ShowData'
import '~/assets/HealthAnalysis.css'
import { Button } from 'antd'
import SvgIcon from '~/components/SvgIcon'
import useFetchAndDisplayCSV from './useFetchAndDisplayCSV'

const csvs = ['analysis_dataframe_cal.csv','analysis_dataframe_dist.csv','analysis_dataframe_heart.csv','analysis_dataframe_steps.csv']
const HealthAnalysis = () => {
    const DISABLED_RANGE = 31
    const defaultDateRange = [day().subtract(DISABLED_RANGE, 'days'), day()]
    const [currentDate, setCurrentDate] = useState(defaultDateRange)
    const handleDateChange = useCallback((dateRange) => {
        setCurrentDate(dateRange)
    })
    return (
        <div className="mt-20 py-4 px-8">
            <section className="flex justify-between items-center">
                    <div className="flex gap-4">
                    <Button>
                    <div className="flex gap-2">
                    <span>Download</span>
                    <SvgIcon iconName="download" size={14} />
                    </div>
                </Button>
                <Button>
                    <div className="flex gap-2">
                    <span>Save</span>
                    <SvgIcon iconName="save" size={14} />
                    </div>
                </Button>
                </div>
            </section>
            <section className="mt-8 flex justify-end items-center">
                <DateRangePicker
                defaultDates={defaultDateRange}
                disabledRange={DISABLED_RANGE}
                onChange={handleDateChange}
                />
            </section>

            <section className="mt-4 p-4 bg-white rounded-lg chart">
                    <Chart dateRange={getDays(currentDate[0], currentDate[1])} />
            </section>

            <section className="mt-4">
                    <ShowData />
            </section>
            
            
        </div>
      );
}
 
export default HealthAnalysis;