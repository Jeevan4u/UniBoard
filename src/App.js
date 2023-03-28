// import Dashboard from './pages/Dashboard'
import { useEffect, useRef } from 'react'
import Sidebar from './layout/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './layout/Header'
import DashboardMain from './pages/dashboardMain/DashboardMain'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Dashboard from './pages/Dashboard'
import User from './pages/user/User'
import CreateUser from './pages/user/CreateUser'
import ViewUser from './pages/user/ViewUser'
import EditUser from './pages/user/EditUser'
import Roles from './pages/roles/Roles'
import CreateRoles from './pages/roles/CreateRoles'
import ViewRoles from './pages/roles/ViewRoles'
import EditRoles from './pages/roles/EditRoles'
import Navigation from './pages/navigation/Navigation'
import Page from './pages/page/Page'
import StaticHtml from './pages/widgetManagement/staticHtml/StaticHtml'
import Banner from './pages/widgetManagement/banner/Banner'
import Images from './pages/widgetManagement/images/Images'
import Videos from './pages/widgetManagement/videos/Videos'
import Files from './pages/widgetManagement/files/Files'
import Forms from './pages/widgetManagement/forms/Forms'
import CreateStaticHtml from './pages/widgetManagement/staticHtml/CreateStaticHtml'
import DynamicHtmlRoutes from './pages/widgetManagement/dynamicHtml/DynamicHtmlRoutes'
import DynamicHtml from './pages/widgetManagement/dynamicHtml/DynamicHtml'
import CreateDynamicHtml from './pages/widgetManagement/dynamicHtml/CreateDynamicHtml'
import CreateBanner from './pages/widgetManagement/banner/CreateBanner'
import CreateImages from './pages/widgetManagement/images/CreateImages'
import CreateVideo from './pages/widgetManagement/videos/CreateVideo'
import CreateFiles from './pages/widgetManagement/files/CreateFiles'
import ManageNavigation from './pages/navigation/ManageNavigation'
import CreateNavigation from './pages/navigation/CreateNavigation'
import CustomeDynamicHtml from './pages/widgetManagement/customeDynamicHtml/CustomDynamicHtml'
import CreateCustomeDynamicHtml from './pages/widgetManagement/customeDynamicHtml/CreateCustomDynamicHtml'
import { Provider } from 'react-redux'
import { store } from './feature/store/store'
import UserLogs from './pages/userLogs/UserLogs'
import { useState } from 'react'
import CreateForm from './pages/widgetManagement/forms/CreateForm'
function App() {
  const dashboardRef = useRef()
  const [sidebar,setSidebar]= useState(false)

 useEffect(() => {
   let handler = (event)=>{
    if(dashboardRef.current.contains(event.target)){
      
      setSidebar(false);
    }
  }
  document.addEventListener('mousedown', handler)

  return ()=>{
    document.removeEventListener('mousedown',handler)
  }
 },)
 
  
  return (
    <div className="App">
      <Provider store={store}>
        <DndProvider backend={HTML5Backend}>
          <BrowserRouter>
            {/* <Dashboard /> */}
            <div className="main  dark:bg-gray-700 w-[100%] flex transition-all ease-in-out duration-400 ">
              <div className={`sidebar-container  h-[100%] hide-scrollbar  w-[240px] translate-x-0 transition-all ease-in-out duration-300 ${sidebar && ' w-0'} sm:absolute sm:top-0 sm:-translate-x-full z-50 ${sidebar && "sm:translate-x-0 sm:w-[240px]" }`}>
                <Sidebar sidebar={sidebar} setSidebar={setSidebar}/>
               
              </div>
            <div className={`mainContainer flex-grow overflow-hidden min-h-screen`} ref={dashboardRef}>
                <Header />
              <div className="bg-white mt-4 rounded-md p-4 dark:bg-gray-800 dark:text-white mx-4 transition-all ease-in-out duration-400 ">
                  <Routes>
                    <Route path="/" element={<DashboardMain />} />
                    <Route path="dashboard" element={<DashboardMain />} />

                    <Route path="accessManagement/user" element={<User />} />

                    <Route
                      path="accessManagement/user/createUser"
                      element={<CreateUser />}
                    />
                    <Route
                      path="accessManagement/user/viewUser"
                      element={<ViewUser />}
                    />
                    <Route
                      path="accessManagement/user/editUser"
                      element={<EditUser />}
                    />
                    <Route path="accessManagement/roles" element={<Roles />} />
                    <Route
                      path="accessManagement/roles/createRole"
                      element={<CreateRoles />}
                    />
                    <Route
                      path="accessManagement/roles/viewRole"
                      element={<ViewRoles />}
                    />
                    <Route
                      path="accessManagement/roles/editRole"
                      element={<EditRoles />}
                    />
                    <Route path="navigation" element={<Navigation />} />
                    <Route
                      path="navigation/createNavigation"
                      element={<CreateNavigation />}
                    />
                    <Route
                      path="navigation/manageNavigation/:id"
                      element={<ManageNavigation />}
                    />
                    <Route path="pages" element={<Page />} />
                    <Route path="dynamicHtml" element={<DynamicHtmlRoutes />}>
                      <Route index element={<DynamicHtml />} />
                      <Route path="create" element={<CreateDynamicHtml />} />
                    </Route>
                    <Route
                      path="customeDynamicHtml"
                      element={<CustomeDynamicHtml />}
                    />
                    <Route
                      path="customeDynamicHtml/create"
                      element={<CreateCustomeDynamicHtml />}
                    />
                    <Route path="staticHtml" element={<StaticHtml />} />
                    <Route
                      path="staticHtml/createStaticHtml"
                      element={<CreateStaticHtml />}
                    />
                    <Route path="banner" element={<Banner />} />
                    <Route path="banner/create" element={<CreateBanner />} />
                    <Route path="images" element={<Images />} />
                    <Route path="images/create" element={<CreateImages />} />

                    <Route path="videos" element={<Videos />} />
                    <Route path="videos/create" element={<CreateVideo />} />

                    <Route path="files" element={<Files />} />
                    <Route path="files/create" element={<CreateFiles />} />

                    <Route path="forms" element={<Forms />} />
                    <Route path="forms/createForms" element={<CreateForm />} />
                    <Route path="userLogs" element={<UserLogs />} />
                  </Routes>
                </div>
              </div>
            </div>
          </BrowserRouter>
        </DndProvider>
      </Provider>
    </div>
  )
}

export default App
