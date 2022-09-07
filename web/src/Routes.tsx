// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route, Private } from '@redwoodjs/router'

import UsersLayout from 'src/layouts/UsersLayout'

import TokensLayout from 'src/layouts/TokensLayout'

import ProfilesLayout from 'src/layouts/ProfilesLayout'

import SentencesLayout from 'src/layouts/SentencesLayout'

import MlLayout from 'src/layouts/MlLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/login" page={LoginPage} name="login" />
      <Route path="/signup" page={SignupPage} name="signup" />
      <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
      <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
      <Set wrap={MlLayout}>
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
      </Set>

      <Private unauthenticated="home">
        <Set wrap={UsersLayout}>
          <Route path="/private/users/new" page={UserNewUserPage} name="newUser" />

          <Route path="/private/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />

          <Route path="/private/users/{id:Int}" page={UserUserPage} name="user" />

          <Route path="/private/users" page={UserUsersPage} name="users" />
        </Set>
        <Set wrap={TokensLayout}>
          <Route path="/private/tokens/new" page={TokenNewTokenPage} name="newToken" />
          <Route path="/private/tokens/{id:Int}/edit" page={TokenEditTokenPage} name="editToken" />
          <Route path="/private/tokens/{id:Int}" page={TokenTokenPage} name="token" />
          <Route path="/private/tokens" page={TokenTokensPage} name="tokens" />
        </Set>
        <Set wrap={ProfilesLayout}>
          <Route path="/private/profiles/new" page={ProfileNewProfilePage} name="newProfile" />
          <Route path="/private/profiles/{id:Int}/edit" page={ProfileEditProfilePage} name="editProfile" />
          <Route path="/private/profiles/{id:Int}" page={ProfileProfilePage} name="profile" />
          <Route path="/private/profiles" page={ProfileProfilesPage} name="profiles" />
        </Set>

        <Set wrap={SentencesLayout}>
          <Route path="/private/sentences/new" page={SentenceNewSentencePage} name="newSentence" />
          <Route path="/private/sentences/{id:Int}/edit" page={SentenceEditSentencePage} name="editSentence" />
          <Route path="/private/sentences/{id:Int}" page={SentenceSentencePage} name="sentence" />
          <Route path="/private/sentences" page={SentenceSentencesPage} name="sentences" />
        </Set>
      </Private>

      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
