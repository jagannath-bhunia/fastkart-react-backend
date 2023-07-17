import React from 'react'

function Sidebar() {
    return (

        <aside className="app-sidebar" id="sidebar">
            <div className="main-sidebar-header"> <a href="index.html" className="header-logo"> <img
                        src="../assets/img/brand-logos/desktop-logo.png" alt="logo" className="main-logo desktop-logo"/> <img
                        src="../assets/img/brand-logos/toggle-logo.png" alt="logo" className="main-logo toggle-logo"/> <img
                        src="../assets/img/brand-logos/desktop-dark.png" alt="logo" className="main-logo desktop-dark"/> <img
                        src="../assets/img/brand-logos/toggle-dark.png" alt="logo" className="main-logo toggle-dark"/> </a>
            </div>
            <div className="main-sidebar " id="sidebar-scroll">
                <nav className="main-menu-container nav nav-pills flex-column sub-open">
                    <div className="slide-left" id="slide-left"><svg xmlns="http://www.w3.org/2000/svg" fill="#7b8191"
                            width="24" height="24" viewBox="0 0 24 24">
                            <path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path>
                        </svg></div>
                    <ul className="main-menu">
                        
                        <li className="slide has-sub"> <a href="javascript:void(0);" className="side-menu__item"> 
                        <svg xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24">
                                    <path fill="#9399a1"
                                        d="M18 22H6a3.003 3.003 0 0 1-3-3v-8.75a3 3 0 0 1 1.023-2.257l6.001-5.25a3.012 3.012 0 0 1 3.952 0l6 5.25A3 3 0 0 1 21 10.25V19a3.003 3.003 0 0 1-3 3Z" />
                                    <path fill="#4b5563" d="M16 22H8v-7a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3Z" />
                                </svg> <span className="side-menu__label">Dashboards</span> <i
                                    className="ri ri-arrow-right-s-line side-menu__angle"></i> </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="javascript:void(0)">Dashboards</a></li>
                                <li className="slide"><a href="index.html" className="side-menu__item">Sales</a></li>
                                <li className="slide"><a href="index2.html" className="side-menu__item">Ecommerce</a></li>
                                <li className="slide"><a href="index3.html" className="side-menu__item">Crypto</a></li>
                                <li className="slide"><a href="index4.html" className="side-menu__item">Jobs</a></li>
                                <li className="slide"><a href="index5.html" className="side-menu__item">NFT</a></li>
                                <li className="slide"><a href="index6.html" className="side-menu__item">Analytics</a></li>
                                <li className="slide"><a href="index7.html" className="side-menu__item">Projects</a></li>
                                <li className="slide"><a href="index8.html" className="side-menu__item">HRM</a></li>
                                <li className="slide"><a href="index9.html" className="side-menu__item">CRM</a></li>
                                <li className="slide"><a href="index10.html" className="side-menu__item">Personal</a></li>
                                <li className="slide"><a href="index11.html" className="side-menu__item">Stocks</a></li>
                                <li className="slide"><a href="index12.html" className="side-menu__item">Course</a></li>
                            </ul>
                        </li>
                        <li className="slide"> <a href="widgets.html" className="side-menu__item"> <svg
                                    xmlns="http://www.w3.org/2000/svg" className="side-menu__icon"
                                    enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                    <path fill="#b7bbc0"
                                        d="M20.23 7.24 12 12 3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z" />
                                    <path fill="#9399a1"
                                        d="M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z" />
                                    <path fill="#4b5563"
                                        d="M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z" />
                                </svg> <span className="side-menu__label">Widgets</span> </a> </li>
                        <li className="slide__category"><span className="category-name">General</span></li>
                        <li className="slide has-sub"> <a href="javascript:void(0);" className="side-menu__item"> <svg
                                    xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24">
                                    <rect width="9" height="9" x="2" y="2" fill="#4b5563" rx="1" />
                                    <rect width="9" height="9" x="2" y="13" fill="#9399a1" rx="1" />
                                    <rect width="9" height="9" x="13" y="2" fill="#9399a1" rx="1" />
                                    <rect width="9" height="9" x="13" y="13" fill="#9399a1" rx="1" />
                                </svg> <span className="side-menu__label">Components</span> <i
                                    className="ri ri-arrow-right-s-line side-menu__angle"></i> </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="javascript:void(0)">Components</a></li>
                                <li className="slide"><a href="accordion.html" className="side-menu__item">Accordion</a></li>
                                <li className="slide"><a href="alerts.html" className="side-menu__item">Alerts</a></li>
                                <li className="slide"><a href="avatars.html" className="side-menu__item">Avatars</a></li>
                                <li className="slide"><a href="badges.html" className="side-menu__item">Badges</a></li>
                                <li className="slide"><a href="blockquotes.html" className="side-menu__item">Blockquotes</a>
                                </li>
                                <li className="slide"><a href="buttons.html" className="side-menu__item">Buttons</a></li>
                                <li className="slide"><a href="cards.html" className="side-menu__item">Cards</a></li>
                                <li className="slide"><a href="collapse.html" className="side-menu__item">Collapse</a></li>
                                <li className="slide"><a href="list-group.html" className="side-menu__item">ListGroup</a></li>
                                <li className="slide"><a href="list.html" className="side-menu__item">List</a></li>
                                <li className="slide"><a href="indicators.html" className="side-menu__item">Indicators</a></li>
                                <li className="slide"><a href="progress.html" className="side-menu__item">Progress</a></li>
                                <li className="slide"><a href="skeleton.html" className="side-menu__item">Skeleton</a></li>
                                <li className="slide"><a href="spinners.html" className="side-menu__item">Spinners</a></li>
                                <li className="slide"><a href="toast.html" className="side-menu__item">Toast</a></li>
                            </ul>
                        </li>
                        <li className="slide has-sub"> <a href="javascript:void(0);" className="side-menu__item"> <svg
                                    xmlns="http://www.w3.org/2000/svg" className="side-menu__icon"
                                    enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                    <path fill="#4b5563"
                                        d="M8 5h1V3c0-.55231-.44769-1-1-1S7 2.44769 7 3v2.18463C7.31421 5.07269 7.64746 5.00037 8 5zM3 9h2V8c.00037-.35254.07269-.68579.18463-1H3C2.44769 7 2 7.44769 2 8S2.44769 9 3 9zM16 5c.35254.00037.68579.07269 1 .18463V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v2H16zM19 8v1h2c.55231 0 1-.44769 1-1s-.44769-1-1-1h-2.18463C18.92731 7.31421 18.99963 7.64746 19 8zM3 13h2v-2H3c-.55231 0-1 .44769-1 1S2.44769 13 3 13zM13 5V3c0-.55231-.44769-1-1-1s-1 .44769-1 1v2H13zM8 19c-.35254-.00037-.68579-.07269-1-.18463V21c0 .00018 0 .00037 0 .00055C7.00012 21.55267 7.44788 22.00012 8 22c.00018 0 .00037 0 .00055 0C8.55267 21.99988 9.00012 21.55212 9 21v-2H8zM21 15h-2v1c-.00037.35254-.07269.68579-.18463 1H21c.55231 0 1-.44769 1-1S21.55231 15 21 15zM5 16v-1H3c-.55231 0-1 .44769-1 1s.44769 1 1 1h2.18463C5.07269 16.68579 5.00037 16.35254 5 16zM21 11h-2v2h2c.55231 0 1-.44769 1-1S21.55231 11 21 11zM16 19h-1v2c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-2.18463C16.68579 18.92731 16.35254 18.99963 16 19zM11 19v2c0 .00018 0 .00037 0 .00055.00012.55212.44788.99957 1 .99945.00018 0 .00037 0 .00055 0 .55212-.00012.99957-.44788.99945-1v-2H11z" />
                                    <path fill="#b7bbc0"
                                        d="M14,15h-4c-0.55214,0.00014-0.99986-0.44734-1-0.99948C9,14.00035,9,14.00017,9,14v-4C8.99986,9.44786,9.44734,9.00014,9.99948,9C9.99965,9,9.99983,9,10,9h4c0.55214-0.00014,0.99986,0.44734,1,0.99948C15,9.99965,15,9.99983,15,10v4c0.00014,0.55214-0.44734,0.99986-0.99948,1C14.00035,15,14.00017,15,14,15z" />
                                    <path fill="#9399a1"
                                        d="M16,5H8C6.34387,5.00183,5.00183,6.34387,5,8v8c0.00183,1.65613,1.34387,2.99817,3,3h8c1.65613-0.00183,2.99817-1.34387,3-3V8C18.99817,6.34387,17.65613,5.00183,16,5z M15,10v4c0.00012,0.55212-0.44733,0.99988-0.99945,1C14.00037,15,14.00018,15,14,15h-4c-0.55212,0.00012-0.99988-0.44733-1-0.99945C9,14.00037,9,14.00018,9,14v-4C8.99988,9.44788,9.44733,9.00012,9.99945,9C9.99963,9,9.99982,9,10,9h4c0.55212-0.00012,0.99988,0.44733,1,0.99945C15,9.99963,15,9.99982,15,10z" />
                                </svg> <span className="side-menu__label">Elements</span> <i
                                    className="ri ri-arrow-right-s-line side-menu__angle"></i> </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="javascript:void(0)">Elements</a></li>
                                <li className="slide"><a href="navbar.html" className="side-menu__item">Navbar</a></li>
                                <li className="slide"><a href="mega-menu.html" className="side-menu__item">MegaMenu</a></li>
                                <li className="slide"><a href="tabs.html" className="side-menu__item">Nav &amp;Tabs</a></li>
                                <li className="slide"><a href="scrollspy.html" className="side-menu__item">Scrollspy</a></li>
                                <li className="slide"><a href="breadcrumb.html" className="side-menu__item">Breadcrumb</a></li>
                                <li className="slide"><a href="pagination.html" className="side-menu__item">Pagination</a></li>
                                <li className="slide"><a href="grid.html" className="side-menu__item">Grids</a></li>
                                <li className="slide"><a href="columns.html" className="side-menu__item"> Columns</a></li>
                            </ul>
                        </li>
                        <li className="slide has-sub"> <a href="javascript:void(0);" className="side-menu__item"> <svg
                                    xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24">
                                    <path fill="#9399a1"
                                        d="m20 9-7-7H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3Z" />
                                    <path fill="#4b5563"
                                        d="M20 9h-5a2 2 0 0 1-2-2V2zm-5 9H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm0-4H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-5-4H9a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2z" />
                                </svg> <span className="side-menu__label">Forms</span> <i
                                    className="ri ri-arrow-right-s-line side-menu__angle"></i> </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="javascript:void(0)">Forms</a></li>
                                <li className="slide"><a href="form-elements.html" className="side-menu__item">FormElements</a>
                                </li>
                                <li className="slide"><a href="advanced-forms.html"
                                        className="side-menu__item">AdvancedForms</a></li>
                                <li className="slide"><a href="form-input-group.html"
                                        className="side-menu__item">Form-Input-Group</a> </li>
                                <li className="slide"><a href="file-upload.html" className="side-menu__item">File Uploads</a>
                                </li>
                                <li className="slide"><a href="form-checkbox.html" className="side-menu__item">Form-Checkbox</a>
                                </li>
                                <li className="slide"><a href="form-radio.html" className="side-menu__item">Form-Radio</a></li>
                                <li className="slide"><a href="form-switch.html" className="side-menu__item">Form-Switch</a>
                                </li>
                                <li className="slide"><a href="form-select.html" className="side-menu__item">Form-Select</a>
                                </li>
                                <li className="slide"><a href="form-layouts.html" className="side-menu__item">Form-Layouts</a>
                                </li>
                                <li className="slide"><a href="form-validations.html"
                                        className="side-menu__item">Form-Validations</a> </li>
                                <li className="slide"><a href="quil-editor.html" className="side-menu__item">Form-Editor</a>
                                </li>
                            </ul>
                        </li>
                        <li className="slide has-sub"> <a href="javascript:void(0);" className="side-menu__item"> <svg
                                    xmlns="http://www.w3.org/2000/svg" className="side-menu__icon"
                                    enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                    <path fill="#b7bbc0"
                                        d="M12,14.19531c-0.17551-0.00004-0.34793-0.04618-0.5-0.13379l-9-5.19726C2.02161,8.58794,1.85779,7.97612,2.13411,7.49773C2.22187,7.34579,2.34806,7.2196,2.5,7.13184l9-5.19336c0.30964-0.17774,0.69036-0.17774,1,0l9,5.19336c0.4784,0.27632,0.64221,0.88814,0.36589,1.36653C21.77813,8.65031,21.65194,8.7765,21.5,8.86426l-9,5.19726C12.34793,14.14913,12.17551,14.19527,12,14.19531z" />
                                    <path fill="#9399a1"
                                        d="M21.5,11.13184l-1.96411-1.13337L12.5,14.06152c-0.30947,0.17839-0.69053,0.17839-1,0L4.46411,9.99847L2.5,11.13184c-0.47839,0.27632-0.64221,0.88814-0.36589,1.36653C2.22187,12.65031,2.34806,12.7765,2.5,12.86426l9,5.19726c0.30947,0.17838,0.69053,0.17838,1,0l9-5.19726c0.4784-0.27632,0.64221-0.88814,0.36589-1.36653C21.77813,11.34579,21.65194,11.2196,21.5,11.13184z" />
                                    <path fill="#4b5563"
                                        d="M21.5,15.13184l-1.96411-1.13337L12.5,18.06152c-0.30947,0.17838-0.69053,0.17838-1,0l-7.03589-4.06305L2.5,15.13184c-0.47839,0.27632-0.64221,0.88814-0.36589,1.36653C2.22187,16.65031,2.34806,16.7765,2.5,16.86426l9,5.19726c0.30947,0.17838,0.69053,0.17838,1,0l9-5.19726c0.4784-0.27632,0.64221-0.88814,0.36589-1.36653C21.77813,15.34579,21.65194,15.2196,21.5,15.13184z" />
                                </svg> <span className="side-menu__label">Advanced Ui</span> <i
                                    className="ri ri-arrow-right-s-line side-menu__angle"></i> </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="javascript:void(0)">Advanced Ui</a></li>
                                <li className="slide"><a href="rangeslider.html" className="side-menu__item">Rangeslider</a>
                                </li>
                                <li className="slide"><a href="calendar.html" className="side-menu__item">Calendar</a></li>
                                <li className="slide"><a href="carousel.html" className="side-menu__item">Carousel</a></li>
                                <li className="slide"><a href="gallery.html" className="side-menu__item">Gallery</a></li>
                                <li className="slide"><a href="sweetalert.html" className="side-menu__item">Sweetalert</a></li>
                                <li className="slide"><a href="ratings.html" className="side-menu__item">Rating</a></li>
                                <li className="slide"><a href="draggable.html" className="side-menu__item">Draggable Cards</a>
                                </li>
                                <li className="slide"><a href="notifications.html" className="side-menu__item">Notifications</a>
                                </li>
                                <li className="slide"><a href="treeview.html" className="side-menu__item">Treeview</a></li>
                                <li className="slide has-sub"><a href="javascript:void(0);" className="side-menu__item">File
                                        Manger<i className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="filemanager.html" className="side-menu__item">File
                                                Manger</a> </li>
                                        <li className="slide"><a href="filemanager-list.html" className="side-menu__item">File
                                                Manger List</a></li>
                                        <li className="slide"><a href="file-details.html" className="side-menu__item">File
                                                Details</a> </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="slide has-sub"> <a href="javascript:void(0);" className="side-menu__item"> <svg
                                    xmlns="http://www.w3.org/2000/svg" className="side-menu__icon"
                                    enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                    <path fill="#b7bbc0"
                                        d="M8.444 3.111a2 2 0 0 0-2 2v13.556a2.222 2.222 0 0 1-2.222 2.222h14.445A3.333 3.333 0 0 0 22 17.556V5.11a2 2 0 0 0-2-2H8.444z" />
                                    <path fill="#9399a1"
                                        d="M6.444 18.667V7.556H4a2 2 0 0 0-2 2v9.333a2 2 0 0 0 2 2h.222a2.222 2.222 0 0 0 2.222-2.222z" />
                                    <path fill="#4b5563"
                                        d="M17 9h-6a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2zm0 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm-5 0h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm5 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2zm-5 0h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2z" />
                                </svg> <span className="side-menu__label">Basic Ui</span> <i
                                    className="ri ri-arrow-right-s-line side-menu__angle"></i> </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="javascript:void(0)">Basic Ui</a></li>
                                <li className="slide"><a href="dropdown.html" className="side-menu__item">Dropdown</a></li>
                                <li className="slide"><a href="modal.html" className="side-menu__item">Modal</a></li>
                                <li className="slide"><a href="offcanvas.html" className="side-menu__item">Offcanvas</a></li>
                                <li className="slide"><a href="tooltip-popovers.html" className="side-menu__item">Tooltips &amp;
                                        Popovers</a></li>
                                <li className="slide has-sub"><a href="javascript:void(0);" className="side-menu__item">Tables<i
                                            className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="tables.html" className="side-menu__item">BasicTables</a>
                                        </li>
                                        <li className="slide"><a href="datatables.html"
                                                className="side-menu__item">DataTables</a></li>
                                        <li className="slide"><a href="edittable.html" className="side-menu__item">Edit
                                                Table</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="slide__category"><span className="category-name">Levels</span></li>
                        <li className="slide has-sub"> <a href="javascript:void(0);" className="side-menu__item"> <svg
                                    xmlns="http://www.w3.org/2000/svg" className="side-menu__icon"
                                    enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                    <path fill="#9399a1"
                                        d="M21,19H11c-0.55258-0.00037-1.00024-0.44862-0.99988-1.0012c0.00012-0.18707,0.05269-0.37036,0.15174-0.52907l5-8c0.33258-0.46842,0.98192-0.57853,1.45033-0.24595c0.09521,0.0676,0.17835,0.15074,0.24595,0.24595l5,8c0.29256,0.46878,0.14971,1.08597-0.31907,1.37853C21.37037,18.94731,21.18707,18.99988,21,19z" />
                                    <path fill="#4b5563"
                                        d="M10.00012,17.99878c0.00012-0.18707,0.05267-0.37036,0.15173-0.52905l3.98083-6.36932l-3.26892-5.60431C10.68463,5.18878,10.35571,4.99988,10,5C9.64429,4.99988,9.31537,5.18878,9.13623,5.49609l-7,12C2.047,17.64905,2,17.82294,2,18c0,0.55231,0.44769,1,1,1h8C10.44739,18.99963,9.99976,18.55139,10.00012,17.99878z" />
                                </svg> <span className="side-menu__label">NestedMenu</span> <i
                                    className="ri ri-arrow-right-s-line side-menu__angle"></i> </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="javascript:void(0)">Nested Menu</a></li>
                                <li className="slide"><a href="javascript:void(0);" className="side-menu__item">Nested-1</a>
                                </li>
                                <li className="slide has-sub"><a href="javascript:void(0);"
                                        className="side-menu__item">Nested-2<i
                                            className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="javascript:void(0);"
                                                className="side-menu__item">Nested-2-1</a> </li>
                                        <li className="slide has-sub"><a href="javascript:void(0);"
                                                className="side-menu__item">Nested-2-2<i
                                                    className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                            <ul className="slide-menu child3">
                                                <li className="slide"><a href="javascript:void(0);"
                                                        className="side-menu__item">Nested-2-2-1</a></li>
                                                <li className="slide"><a href="javascript:void(0);"
                                                        className="side-menu__item">Nested-2-2-2</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li className="slide__category"><span className="category-name">Maps &amp; charts</span></li>
                        <li className="slide has-sub"> <a href="javascript:void(0);" className="side-menu__item"> <svg
                                    xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24">
                                    <path fill="#9399a1"
                                        d="M12 22a.993.993 0 0 1-.65-.241C11.049 21.502 4 15.397 4 10a8 8 0 0 1 16 0c0 5.397-7.049 11.502-7.35 11.759A.993.993 0 0 1 12 22Z" />
                                    <path fill="#4b5563" d="M12 14a4 4 0 1 1 4-4 4.004 4.004 0 0 1-4 4Z" />
                                </svg> <span className="side-menu__label">Maps</span> <i
                                    className="ri ri-arrow-right-s-line side-menu__angle"></i> </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="javascript:void(0)">Maps</a></li>
                                <li className="slide"><a href="google-maps.html" className="side-menu__item">Google Maps</a>
                                </li>
                                <li className="slide"><a href="leaflet-maps.html" className="side-menu__item">Leaflet Maps</a>
                                </li>
                                <li className="slide"><a href="vector-maps.html" className="side-menu__item">Vector Maps</a>
                                </li>
                            </ul>
                        </li>
                        <li className="slide has-sub"> <a href="javascript:void(0);" className="side-menu__item"> <svg
                                    xmlns="http://www.w3.org/2000/svg" className="side-menu__icon"
                                    enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                    <path fill="#b7bbc0" d="M12 12V2c5.523 0 10 4.477 10 10H12z" />
                                    <path fill="#9399a1" d="m12 12 5 8.66A10.01 10.01 0 0 0 22 12H12z" />
                                    <path fill="#4b5563"
                                        d="M17 20.66 12 12V2c-5.523.002-9.999 4.48-9.997 10.003.002 5.523 4.48 9.999 10.004 9.997A10 10 0 0 0 17 20.662l.003-.005-.004.003z" />
                                </svg> <span className="side-menu__label">Charts</span> <i
                                    className="ri ri-arrow-right-s-line side-menu__angle"></i> </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="javascript:void(0)">Charts</a></li>
                                <li className="slide"><a href="apex-charts.html" className="side-menu__item">ApexCharts</a></li>
                                <li className="slide"><a href="chartjs.html" className="side-menu__item">ChartJS</a></li>
                                <li className="slide"><a href="echartjs.html" className="side-menu__item">EchartJs</a></li>
                            </ul>
                        </li>
                        <li className="slide__category"><span className="category-name">Pages</span></li>
                        <li className="slide has-sub"> <a href="javascript:void(0);" className="side-menu__item"> <svg
                                    xmlns="http://www.w3.org/2000/svg" className="side-menu__icon"
                                    enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                                    <path fill="#9399a1"
                                        d="M12.58447,17.94482c2.37423-1.73565,5.35432-2.42634,8.25-1.91211c0.54491,0.09121,1.06059-0.27659,1.1518-0.8215c0.00912-0.05447,0.01371-0.10959,0.01373-0.16482v-12c-0.00019-0.48836-0.35289-0.90525-0.83447-0.98633C20.45033,1.93541,19.72597,1.87073,19,1.8667c-2.48281-0.00313-4.91364,0.71123-7,2.05713V18.1333C12.20977,18.13337,12.41425,18.06743,12.58447,17.94482z" />
                                    <path fill="#4b5563"
                                        d="M5,1.8667C4.27403,1.87073,3.54967,1.93541,2.83447,2.06006C2.35289,2.14114,2.00019,2.55803,2,3.04639v12c0.00018,0.5525,0.44822,1.00023,1.00071,1.00005c0.05522-0.00002,0.11035-0.00461,0.16482-0.01373C3.77131,15.92622,4.38495,15.87069,5,15.8667c2.30424-0.00178,4.54995,0.72565,6.41553,2.07812C11.58575,18.06743,11.79023,18.13337,12,18.1333V3.92383C9.91364,2.57793,7.48281,1.86357,5,1.8667z" />
                                    <path fill="#9399a1"
                                        d="M21.16553,18.06006C20.45033,17.93541,19.72597,17.87073,19,17.8667c-2.48281-0.00313-4.91364,0.71124-7,2.05713v2.20947c0.20977,0.00007,0.41425-0.06587,0.58447-0.18848c2.37423-1.73565,5.35432-2.42634,8.25-1.91211c0.54459,0.09225,1.06086-0.27445,1.1531-0.81904c0.09225-0.54459-0.27445-1.06086-0.81904-1.1531C21.16753,18.06039,21.16653,18.06023,21.16553,18.06006z" />
                                    <path fill="#4b5563"
                                        d="M5,17.8667c-0.72595,0.00403-1.45032,0.06873-2.16553,0.19336c-0.00104,0.00018-0.00201,0.00031-0.00305,0.00049c-0.54462,0.09229-0.91125,0.60852-0.81903,1.15314c0.09229,0.54462,0.60852,0.91125,1.15314,0.81903C3.7713,19.92621,4.38495,19.87067,5,19.8667c2.30426-0.00177,4.54993,0.72565,6.41553,2.07812C11.58575,22.06744,11.79022,22.13336,12,22.1333v-2.20947C9.91364,18.57794,7.48279,17.86359,5,17.8667z" />
                                </svg> <span className="side-menu__label">Pages</span> <i
                                    className="ri ri-arrow-right-s-line side-menu__angle"></i> </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="javascript:void(0)">Pages</a></li>
                                <li className="slide has-sub"><a href="javascript:void(0);"
                                        className="side-menu__item">Profile<i
                                            className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="profile.html" className="side-menu__item">Home</a></li>
                                        <li className="slide"><a href="profile-settings.html"
                                                className="side-menu__item">Profile Settings</a></li>
                                    </ul>
                                </li>
                                <li className="slide has-sub"><a href="javascript:void(0);"
                                        className="side-menu__item">Invoice<i
                                            className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="invoice-list.html" className="side-menu__item">Invoice
                                                List</a> </li>
                                        <li className="slide"><a href="invoice.html" className="side-menu__item">Invoice
                                                Details</a> </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub"><a href="javascript:void(0);" className="side-menu__item">Blog<i
                                            className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="blog.html" className="side-menu__item">Blog</a></li>
                                        <li className="slide"><a href="blog-details.html" className="side-menu__item">Blog
                                                Details</a> </li>
                                        <li className="slide"><a href="blog-edit.html" className="side-menu__item">Edit Blog</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub"><a href="javascript:void(0);" className="side-menu__item">Mail<i
                                            className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="mail-inbox.html" className="side-menu__item">Mail</a>
                                        </li>
                                        <li className="slide"><a href="chat.html" className="side-menu__item">Chat</a></li>
                                        <li className="slide"><a href="mail-settings.html"
                                                className="side-menu__item">Mail-settings</a> </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub"><a href="javascript:void(0);"
                                        className="side-menu__item">Ecommerce<i
                                            className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="products.html" className="side-menu__item">Products</a>
                                        </li>
                                        <li className="slide"><a href="product-list.html" className="side-menu__item">Product
                                                list</a> </li>
                                        <li className="slide"><a href="add-product.html" className="side-menu__item">Add
                                                Product</a> </li>
                                        <li className="slide"><a href="edit-product.html" className="side-menu__item">Edit
                                                Product</a> </li>
                                        <li className="slide"><a href="products-details.html"
                                                className="side-menu__item">Products-Details</a></li>
                                        <li className="slide"><a href="cart.html" className="side-menu__item">Cart</a></li>
                                        <li className="slide"><a href="checkout.html" className="side-menu__item">Checkout</a>
                                        </li>
                                        <li className="slide"><a href="orders.html" className="side-menu__item">Orders</a></li>
                                        <li className="slide"><a href="order-details.html" className="side-menu__item">Order
                                                Details</a> </li>
                                        <li className="slide"><a href="wishlist.html" className="side-menu__item">Whislist</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="slide"><a href="about.html" className="side-menu__item">About Us</a></li>
                                <li className="slide"><a href="contacts.html" className="side-menu__item">Contacts</a></li>
                                <li className="slide"><a href="pricing.html" className="side-menu__item">Pricing tables</a></li>
                                <li className="slide"><a href="timeline.html" className="side-menu__item">Timeline</a></li>
                                <li className="slide"><a href="team.html" className="side-menu__item">Team</a></li>
                                <li className="slide"><a href="landing.html" className="side-menu__item">Landing</a></li>
                                <li className="slide"><a href="todo.html" className="side-menu__item">Todo list</a></li>
                                <li className="slide"><a href="tasks.html" className="side-menu__item">Tasks</a></li>
                                <li className="slide"><a href="reviews.html" className="side-menu__item">Reviews</a></li>
                                <li className="slide"><a href="faqs.html" className="side-menu__item">Faq's</a></li>
                                <li className="slide"><a href="contactus.html" className="side-menu__item">Contact Us</a></li>
                                <li className="slide"><a href="terms.html" className="side-menu__item">Terms&amp;conditions</a>
                                </li>
                                <li className="slide"><a href="empty.html" className="side-menu__item">Empty</a></li>
                            </ul>
                        </li>
                        <li className="slide has-sub"> <a href="javascript:void(0);" className="side-menu__item"> <svg
                                    xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" data-name="Layer 1"
                                    viewBox="0 0 24 24">
                                    <path fill="#9399a1"
                                        d="M21 22h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1Z" />
                                    <path fill="#4b5563"
                                        d="m7.914 17.5 2.793-2.793a1 1 0 0 0-1.414-1.414L6.5 16.086l-2.793-2.793a1 1 0 0 0-1.414 1.414L5.086 17.5l-2.793 2.793a1 1 0 1 0 1.414 1.414L6.5 18.914l2.793 2.793a1 1 0 0 0 1.414-1.414zM21 11h-7a1 1 0 0 1-.895-1.447l3.5-7a1.041 1.041 0 0 1 1.79 0l3.5 7A1 1 0 0 1 21 11z" />
                                    <path fill="#9399a1" d="M6.5 11A4.5 4.5 0 1 1 11 6.5 4.505 4.505 0 0 1 6.5 11Z" />
                                </svg> <span className="side-menu__label">Icons</span> <i
                                    className="ri ri-arrow-right-s-line side-menu__angle"></i> </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="javascript:void(0)">Icons</a></li>
                                <li className="slide"><a href="tabler-icons.html" className="side-menu__item">Tabler Icons</a>
                                </li>
                                <li className="slide"><a href="remix-icons.html" className="side-menu__item">Remix Icons</a>
                                </li>
                            </ul>
                        </li>
                        <li className="slide has-sub"> <a href="javascript:void(0);" className="side-menu__item"> <svg
                                    xmlns="http://www.w3.org/2000/svg" className="side-menu__icon" viewBox="0 0 24 24">
                                    <path fill="#9399a1"
                                        d="M15.728 22H8.272a1 1 0 0 1-.707-.293l-5.272-5.272A1 1 0 0 1 2 15.728V8.272a1 1 0 0 1 .293-.707l5.272-5.272A1 1 0 0 1 8.272 2h7.456a1 1 0 0 1 .707.293l5.272 5.272a1 1 0 0 1 .293.707v7.456a1 1 0 0 1-.293.707l-5.272 5.272a1 1 0 0 1-.707.293Z" />
                                    <circle cx="12" cy="16" r="1" fill="#4b5563" />
                                    <path fill="#4b5563" d="M12 13a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z" />
                                </svg> <span className="side-menu__label">Authentication</span> <i
                                    className="ri ri-arrow-right-s-line side-menu__angle"></i> </a>
                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1"><a href="javascript:void(0)">Authentication</a></li>
                                <li className="slide has-sub"><a href="javascript:void(0);"
                                        className="side-menu__item">Sign-In<i
                                            className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="signin.html" className="side-menu__item">Basic</a></li>
                                        <li className="slide"><a href="signin-cover.html"
                                                className="side-menu__item">Cover-1</a></li>
                                        <li className="slide"><a href="signin-cover2.html"
                                                className="side-menu__item">Cover-2</a></li>
                                    </ul>
                                </li>
                                <li className="slide has-sub"><a href="javascript:void(0);"
                                        className="side-menu__item">Sign-Up<i
                                            className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="signup.html" className="side-menu__item">Basic</a></li>
                                        <li className="slide"><a href="signup-cover.html"
                                                className="side-menu__item">Cover-1</a></li>
                                        <li className="slide"><a href="signup-cover2.html"
                                                className="side-menu__item">Cover-2</a></li>
                                    </ul>
                                </li>
                                <li className="slide has-sub"><a href="javascript:void(0);" className="side-menu__item">Create
                                        Password<i className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="createpassword.html"
                                                className="side-menu__item">Basic</a></li>
                                        <li className="slide"><a href="createpassword-cover.html"
                                                className="side-menu__item">Cover-1</a></li>
                                        <li className="slide"><a href="createpassword-cover2.html"
                                                className="side-menu__item">Cover-2</a></li>
                                    </ul>
                                </li>
                                <li className="slide has-sub"><a href="javascript:void(0);" className="side-menu__item">Forgot
                                        Password<i className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="forgot.html" className="side-menu__item">Basic</a></li>
                                        <li className="slide"><a href="forgot-cover.html"
                                                className="side-menu__item">Cover-1</a></li>
                                        <li className="slide"><a href="forgot-cover2.html"
                                                className="side-menu__item">Cover-2</a></li>
                                    </ul>
                                </li>
                                <li className="slide has-sub"><a href="javascript:void(0);" className="side-menu__item">Reset
                                        Password<i className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="reset.html" className="side-menu__item">Basic</a></li>
                                        <li className="slide"><a href="reset-cover.html" className="side-menu__item">Cover-1</a>
                                        </li>
                                        <li className="slide"><a href="reset-cover2.html"
                                                className="side-menu__item">Cover-2</a></li>
                                    </ul>
                                </li>
                                <li className="slide has-sub"><a href="javascript:void(0);"
                                        className="side-menu__item">Lockscreen<i
                                            className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="lockscreen.html" className="side-menu__item">Basic</a>
                                        </li>
                                        <li className="slide"><a href="lockscreen-cover.html"
                                                className="side-menu__item">Cover-1</a> </li>
                                        <li className="slide"><a href="lockscreen-cover2.html"
                                                className="side-menu__item">Cover-2</a> </li>
                                    </ul>
                                </li>
                                <li className="slide has-sub"><a href="javascript:void(0);" className="side-menu__item">Two-Step
                                        Verfication<i className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="verfication.html" className="side-menu__item">Basic</a>
                                        </li>
                                        <li className="slide"><a href="verfication-cover.html"
                                                className="side-menu__item">Cover-1</a> </li>
                                        <li className="slide"><a href="verfication-cover2.html"
                                                className="side-menu__item">Cover-2</a> </li>
                                    </ul>
                                </li>
                                <li className="slide"><a href="maintanace.html" className="side-menu__item">Under Maintanace</a>
                                </li>
                                <li className="slide"><a href="construction.html" className="side-menu__item">Under
                                        Construction</a> </li>
                                <li className="slide"><a href="comingsoon.html" className="side-menu__item">Coming Soon</a></li>
                                <li className="slide has-sub"><a href="javascript:void(0);" className="side-menu__item">Error
                                        Pages<i className="ri ri-arrow-right-s-line side-menu__angle"></i></a>
                                    <ul className="slide-menu child2">
                                        <li className="slide"><a href="404.html" className="side-menu__item">404Error</a></li>
                                        <li className="slide"><a href="500.html" className="side-menu__item">500Error</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                   
                </nav>
            </div>
        </aside>

    )
}

export default Sidebar
