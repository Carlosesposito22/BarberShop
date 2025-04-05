export type ScheduleAppointementMonthModel = {
    year: number
    month: number
    scheduledAppointments: ClientScheduleAppointmentModel[]
}

export type ClientScheduleAppointmentModel = {
    id: number
    day: number
    startAt: Date
    endAt: Date
    clientId: number
    clientName: string
}

export type SaveScheduleModel = {
    startAt?: Date
    endAt?: Date
    clientId?: number
}

export type SelectClientModel = {
    id: number
    name: string
}