import slugify from 'slugify'

export const strToSlug = (str: string): string =>
  slugify(str, {
    remove: /[^0-9a-zA-Z\s]/gim,
    lower: true,
    trim: true,
  })

export const getMonth = (date: string): string =>
  new Date(date)
    .toLocaleString('pt-BR', {
      month: 'long',
    })
    .slice(0, 3)
    .toLocaleUpperCase()

export const getDay = (date: string): string =>
  new Date(date)
    .toLocaleString('pt-BR', {
      day: 'numeric',
    })
    .padStart(2, '0')

export const NormalizeDate = (date: string): string =>
  new Date(date)
    .toLocaleString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
    .padStart(2, '0')

export const GetHour = (date: string): string =>
  new Date(date)
    .toLocaleString('pt-BR', {
      hour: 'numeric',
      minute: 'numeric',
    })
    .padStart(2, '0')
