import { IoIosMenu, IoMdNotificationsOutline } from 'react-icons/io'
import './TodoList.css'
import { MdDelete } from 'react-icons/md'
import { IoAddCircleSharp } from 'react-icons/io5'

export function Todolist (){
    const array = [
        {
            id: 1,
            title: "hellow",
            time : "9:00 am"
        },
        {
            id: 2,
            title: "Mail Quotation",
            time : "10:00 am"
        }
    ]
    return(
        <>
           <div className="cardContainer">
                <div className="taskTitle">
                    <div className="topsection">
                        <div className="menu">
                            <a href="#"><IoIosMenu className='taskMenu'/></a>
                        </div>
                        <div className="title">
                            <h2>All Tasks</h2>
                        </div>
                        <div className="alert">
                            <a href="#"><IoMdNotificationsOutline className='alertBell'/></a>
                        </div>
                    </div>

                    <div className="daysection">
                        <div className="days">
                            <a href="#" className="day">Today</a>
                            <a href="#" className="day">Daily</a>
                            <a href="#" className="day">Weekly</a>
                            <a href="#" className="day">Monthly</a>
                        </div>
                    </div>

                    <div className="manageList">
                        
                         <div className="addList">
                            <a href="#" className="manageicons">
                                <IoAddCircleSharp/>
                            </a>
                        </div>

                        <div className="delList">
                            <a href="" className="manageicons">
                                <MdDelete/>
                            </a>
                        </div>
                    </div>

                    <div className="cardlists">
{array.map ((item,index)=>
  <div className="dolist">
                            <div className="checkbox">
                                <input type="checkbox" name='check'/>
                            </div>
                            <div className="dolistTitle">
                                <span className="listTitle">{item.title}</span>
                            </div>
                            <div className="dolistTime">
                                <span className="listTime">{item.time}</span>
                            </div>
                        </div>
)}
                        <div className="dolist">
                            <div className="checkbox">
                                <input type="checkbox" name='check'/>
                            </div>
                            <div className="dolistTitle">
                                <span className="listTitle">Mail Quotation</span>
                            </div>
                            <div className="dolistTime">
                                <span className="listTime">9:00 AM</span>
                            </div>
                        </div>

                        <div className="dolist">
                            <div className="checkbox">
                                <input type="checkbox" name='check'/>
                            </div>
                            <div className="dolistTitle">
                                <span className="listTitle">Meeting with Client</span>
                            </div>
                            <div className="dolistTime">
                                <span className="listTime">11:00 AM</span>
                            </div>
                        </div>

                        <div className="dolist">
                            <div className="checkbox">
                                <input type="checkbox" name='check'/>
                            </div>
                            <div className="dolistTitle">
                                <span className="listTitle">Car Wash</span>
                            </div>
                            <div className="dolistTime">
                                <span className="listTime">2:00 PM</span>
                            </div>
                        </div>

                         <div className="dolist">
                            <div className="checkbox">
                                <input type="checkbox" name='check'/>
                            </div>
                            <div className="dolistTitle">
                                <span className="listTitle">Team Meeting</span>
                            </div>
                            <div className="dolistTime">
                                <span className="listTime">4:00 PM</span>
                            </div>
                        </div>
                    </div>

                    
                </div>
           </div>
        </>
    )
}