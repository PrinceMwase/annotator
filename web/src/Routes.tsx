// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import TokensLayout from 'src/layouts/TokensLayout'

import ProfilesLayout from 'src/layouts/ProfilesLayout'

import UsersLayout from 'src/layouts/UsersLayout'

import SentencesLayout from 'src/layouts/SentencesLayout'

import MlLayout from 'src/layouts/MlLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/about" page={AboutPage} name="about" />
      <Set wrap={MlLayout}>
        <Route path="/" page={HomePage} name="home" />
      </Set>

      <Set wrap={TokensLayout}>
        <Route path="/tokens/new" page={TokenNewTokenPage} name="newToken" />
        <Route path="/tokens/{id:Int}/edit" page={TokenEditTokenPage} name="editToken" />
        <Route path="/tokens/{id:Int}" page={TokenTokenPage} name="token" />
        <Route path="/tokens" page={TokenTokensPage} name="tokens" />
      </Set>
      <Set wrap={ProfilesLayout}>
        <Route path="/profiles/new" page={ProfileNewProfilePage} name="newProfile" />
        <Route path="/profiles/{id:Int}/edit" page={ProfileEditProfilePage} name="editProfile" />
        <Route path="/profiles/{id:Int}" page={ProfileProfilePage} name="profile" />
        <Route path="/profiles" page={ProfileProfilesPage} name="profiles" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={SentencesLayout}>
        <Route path="/sentences/new" page={SentenceNewSentencePage} name="newSentence" />
        <Route path="/sentences/{id:Int}/edit" page={SentenceEditSentencePage} name="editSentence" />
        <Route path="/sentences/{id:Int}" page={SentenceSentencePage} name="sentence" />
        <Route path="/sentences" page={SentenceSentencesPage} name="sentences" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
