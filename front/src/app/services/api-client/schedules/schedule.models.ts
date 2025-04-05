export type ScheduleAppointmentMonthResponse = {
    year: number,
    month: number
    scheduledAppointments: ClientScheduleAppointementResponse[]
}

export type ClientScheduleAppointementResponse = {
    id: number
    day: number
    startAt: Date
    endAt: Date
    clientId: number
    clientName: string
}

export type SaveScheduleResponse = {
    id: number
    startAt: Date
    endAt: Date
    clientId: number
}

export type SaveScheduleRequest = {
    startAt: Date
    endAt: Date
    clientId: number
}