// @flow

import NotesPage from 'note/cmp-page/notes-page'
import NotePage from 'note/cmp-page/note-page'
import NotesIcon from '@material-ui/icons/Description'

export const notesPageConfig: Object = {
  route: {
    path: '/notes',
    component: NotesPage,
  },
  graphql: {
    query: '{ notes { id, title, description } }',
  },
  title: 'Notes',
  loggedInOnly: true,
  icon: NotesIcon,
}

export const notePageConfig: Object = {
  route: {
    path: '/note/:id',
    component: NotePage,
  },
  graphql: {
    query: 'query ($id: ID!) { note(id: $id) { id, title, description } }',
    urlParamsToVars: ({ id }: { id: string }) => ({ id }),
  },
  loggedInOnly: true,
}
