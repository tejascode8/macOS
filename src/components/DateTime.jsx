import React, { useState, useEffect } from 'react'

const DateTime = () => {
  const [dateTime, setDateTime] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      
      const weekday = now.toLocaleDateString('en-US', { weekday: 'short' })
      const month = now.toLocaleDateString('en-US', { month: 'short' })
      const day = now.getDate()
      const time = now.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      })

      // Format: "Sun 6 Sep 6:07 PM" (Date before Month)
      setDateTime(`${weekday} ${day} ${month} ${time}`)
    }

    updateDateTime()
    const interval = setInterval(updateDateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="date-time">{dateTime}</div>
  )
}

export default DateTime