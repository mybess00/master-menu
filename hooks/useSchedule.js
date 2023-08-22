export function useSchedule (from, to) {
  const date = new Date()
  const day = date.getDay()
  const hour = date.getHours()
  const minutes = date.getMinutes()

  const isDayWork = () => {
    if (day >= from[0] && day <= to[0]) {
      return true
    }
    return false
  }

  const isHourWork = () => {
    if (hour >= from[1] && hour <= to[1]) {
      if (hour === from[1] && minutes >= from[2]) {
        return true
      } else if (hour === to[1] && minutes < to[2]) {
        return true
      } if (minutes >= from[2]) {
        return true
      }
    }
    return false
  }

  const setSchedule = () => {
    if (isDayWork() && isHourWork()) {
      return true
    } 
    return false
  }

  return setSchedule()
}