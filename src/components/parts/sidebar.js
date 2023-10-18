// Sidebar.js
import React, {useState} from 'react';
import { BsChevronCompactDown } from 'react-icons/bs';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { BiSolidUser } from 'react-icons/bi';
const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleDropdown = (index) => {
    setActiveMenu(activeMenu === index ? null : index);
  };

  const isDropdownActive = (index) => {
    return activeMenu === index ? 'active' : '';
  };
  return (
    <aside>
      <div className='main_heading'>
      <img src={`../img/dasboard.png`} alt="User" width={30} height={30}/>
      <h2>Dashboard</h2>
      </div>
      <ul>
      <li
          className={`menu_item active`}
        >
          <div className='menu_text'>
          <div className='main_part_menu m1'>
            <img src={`../img/key.png`} alt="User" width={22} height={22}/>
            Dashboard
            </div>
          
          </div>
        </li>

        <li
          className={`menu_item ${isDropdownActive(0)}`}
          onClick={() => toggleDropdown(0)}
        >
          <div className='menu_text'>
          <div className='main_part_menu m1'>
            <img src={`../img/${isDropdownActive(0) ? 'box' : 'box'}.png`} width={22} height={22} alt="User" />
            Product
            </div>
          <HiOutlineChevronDown />
          </div>
          {activeMenu === 0 && (
            <ul className="submenu">
              <li>Option 1</li>
            
            </ul>
          )}
        </li>
        <li
          className={`menu_item ${isDropdownActive(1)}`}
          onClick={() => toggleDropdown(1)}
        >
          <div className='menu_text'>
            <div className='main_part_menu m2'>
            <img src={`../img/${isDropdownActive(1) ? 'user' : 'user'}.png`} width={22} height={22} alt="People" />
            Customers
            </div>
            <HiOutlineChevronDown />
          </div>
          {activeMenu === 1 && (
            <ul className="submenu">
              <li>Option 1</li>
              
            </ul>
          )}
        </li>
        <li
          className={`menu_item ${isDropdownActive(2)}`}
          onClick={() => toggleDropdown(2)}
        >
          <div className='menu_text'>
            <div className='main_part_menu m3'>
            <img src={`../img/${isDropdownActive(2) ? 'wallet' : 'wallet'}.png`} width={22} height={22} alt="People" />
            Income
            </div>
            <HiOutlineChevronDown />
          </div>
          {activeMenu === 2 && (
            <ul className="submenu">
              <li>Option 1</li>
             
            </ul>
          )}
        </li>
        <li
          className={`menu_item ${isDropdownActive(3)}`}
          onClick={() => toggleDropdown(3)}
        >
          <div className='menu_text'>
            <div className='main_part_menu m4'>
            <img src={`../img/${isDropdownActive(3) ? 'discount' : 'discount'}.png`} width={22} height={22} alt="People" />
            Promote
            </div>
            <HiOutlineChevronDown />
          </div>
          {activeMenu === 3 && (
            <ul className="submenu">
              <li>Option 1</li>
             
            </ul>
          )}
        </li>
        <li
          className={`menu_item ${isDropdownActive(4)}`}
          onClick={() => toggleDropdown(4)}
        >
          <div className='menu_text'>
            <div className='main_part_menu m4'>
            <img src={`../img/${isDropdownActive(4) ? 'information' : 'information'}.png`} width={22} height={22} alt="People" />
            Help
            </div>
            <HiOutlineChevronDown />
          </div>
          {activeMenu === 4 && (
            <ul className="submenu">
              <li>Option 1</li>
             
            </ul>
          )}
        </li>
        {/* Repeat the same pattern for the other menu items */}
      </ul>
      <ul className='margin-top-space'>
      <li
          className={`menu_item active`}
        >
          <div className='menu_text'>
          <div className='main_part_menu m1'>
            <img src={`../img/Rectangle.png`} alt="User" width={30} height={30}/>
            <div className='client-name'>
            Evano
            <div className='designation'>
              Project Manager
            </div>
              </div>
            </div>
            <HiOutlineChevronDown />
          </div>
        </li>        
      </ul>
    </aside>
  );
};

export default Sidebar;
