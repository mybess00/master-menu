export function useSchedule (from: number, to: number): boolean {
  const date = new Date()
  const day = date.getDay()
  const hour = date.getHours()
  const minutes = date.getMinutes()

  const isDayWork = (): boolean => {
    if (day >= from[0] && day <= to[0]) {
      return true
    }
    return false
  }

  const isHourWork = (): boolean => {
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

  const setSchedule = (): boolean => {
    if (isDayWork() && isHourWork()) {
      return true
    } 
    return false
  }

  return setSchedule()
}