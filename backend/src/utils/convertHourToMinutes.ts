export default function convertHourToMinutes(time: string) {
  const [hour, minutes] = time.split(':').map(Number)

  const timeInMiutes = (hour * 60) + minutes

  return timeInMiutes
}