import dbx, {
  Dropbox,
  DropboxAuth,
  DropboxOptions,
  DropboxAuthOptions,
  DropboxResponse,
} from 'dropbox'

import queryString from 'querystring'


const DROPBOX_KEY = process.env.REACT_APP_DROPBOX_KEY ?? ''

const authOptions: DropboxAuthOptions = {
  clientId: DROPBOX_KEY,
}
export const dropboxAuth = new DropboxAuth(authOptions);


let params: queryString.ParsedUrlQuery = queryString.parse(window.location.hash)
let _accessToken: string | string[] | null = params.access_token ?? null
if (_accessToken !== null && typeof _accessToken !== 'string') {
  _accessToken = _accessToken[0]
}

let accessToken: string | null = _accessToken ?? null
if (accessToken !== null) {
  localStorage.setItem('dropbox-accesstoken', accessToken)
  window.location.hash = ''
}

accessToken = localStorage.getItem('dropbox-accesstoken') ?? null
console.log(accessToken)

let options: DropboxOptions | null = null
if (accessToken !== null) {
  options = {
    clientId: DROPBOX_KEY,
    accessToken: accessToken,
  }
}
export const dropbox: Dropbox | null = options !== null ? new Dropbox(options) : null

if (dropbox !== null) {
  (async () => {
    const fileArg: dbx.files.ListFolderArg = {
      path: '/Music',
    }
    const response: DropboxResponse<dbx.files.ListFolderResult> = await dropbox.filesListFolder(fileArg)
    const result: dbx.files.ListFolderResult = response.result

    console.log(result.entries)
  })()
}
