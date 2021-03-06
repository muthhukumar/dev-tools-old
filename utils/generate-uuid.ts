import * as uuid from 'uuid'

export const generateUUID = (version: '4' | '1' | 'NIL_UUID' = '4'): string => {
  const uuidGenerator = {
    '1': () => uuid.v1(),
    '4': () => uuid.v4(),
    'NIL_UUID': () => uuid.NIL,
  }
  return uuidGenerator[version]()
}

export const composeUUID = (uuids: Array<string> | null = []): string => {
  if (!uuids) return ''
  return uuids.join('\n')
}
