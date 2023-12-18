import Button from "../../../components/Button"
import DefaultLayout from "../../../components/Layout"
import Menu from "../../../components/Menu"
import Title from "../../../components/Title"

const TimeOrderedViews = () => {
  const urlPrefix = '/maintenancemessages/timeorderedviews/'

  return (
    <DefaultLayout>
      <Title>Time Ordered Views</Title>
      <Menu>
        <Button href={`${urlPrefix}active`}>Active</Button>
        <Button href={`${urlPrefix}currentleg`}>Current Leg</Button>
        <Button href={`${urlPrefix}lastsevendays`}>Last 7 Days</Button>
        <Button href={`${urlPrefix}lastfourteendays`}>Last 14 Days</Button>
        <Button href={`${urlPrefix}selectdaterange`}>Select Date range</Button>
        <Button href="/">Return To Main Menu</Button>
      </Menu>
    </DefaultLayout>
  )
}

export default TimeOrderedViews
