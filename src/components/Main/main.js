import React from 'react'
import './main.css'

import discount from '../../assets/discount.png'
import ticket from '../../assets/ticket.png'
import buy from '../../assets/buy.png'
import texnika from '../../assets/texnika.png'
import arrow from '../../assets/arrow.png'
import arrows from '../../assets/arrows.png'
import game from '../../assets/game.png'
import social from '../../assets/social.png'
import category from '../../assets/category.png'
import line from '../../assets/line.png'
import click from '../../assets/click.png'



const main = () => {
  return (
    <div className='main-container'>
      <div className='mt-4'>
        <h1 className='text-5xl'>Welcome Back</h1>
        <p className='mt-3'><strong>We have a lot of work to day, what do you what to start with?</strong></p>

        <div className='flex gap-4 mt-4'>
          <div className='main-box'>
            <div className='flex justify-between'>
              <img src={discount} alt="discount-img" width={32} height={32} />
              <div>
                <p><strong>Manual Trading</strong></p>
                <p>Stock Wallet</p>
              </div>
              <span className='text-emerald-400'>-21.73%</span>
            </div>
            <div className='flex justify-around mt-5'>
              <p>32 Stocks</p>
              <p>124 Type</p>
            </div>
          </div>

          <div className='main-box'>
            <div className='flex justify-between'>
              <img src={ticket} alt="ticket-img" width={32} height={32} />
              <div>
                <p><strong>Manual Trading</strong></p>
                <p>Stock Wallet</p>
              </div>
              <span className='text-emerald-400'>-21.73%</span>
            </div>
            <div className='flex justify-around mt-5'>
              <p>32 Stocks</p>
              <p>124 Type</p>
            </div>
          </div>

          <div className='main-box'>
            <div className='flex justify-between'>
              <img src={buy} alt="buy-img" width={32} height={32} />
              <div>
                <p><strong>Manual Trading</strong></p>
                <p>Stock Wallet</p>
              </div>
              <span className='text-emerald-400'>-21.73%</span>
            </div>
            <div className='flex justify-around mt-5'>
              <p>32 Stocks</p>
              <p>124 Type</p>
            </div>
          </div>
        </div>

        <div className='mt-4'>
          <h2 className='text-3xl'>Market</h2>

          <div className='flex justify-between mt-3'>
            <div className='flex gap-3'>
              <div className='select-box'>
                <select className='select'>
                  <option>Most Recent</option>
                </select>
              </div>
              <div className='select-boxa'>
                <select className='select'>
                  <option>All Status</option>
                </select>
              </div><div className='select-boxb'>
                <select className='select'>
                  <option>Billing</option>
                </select>
              </div>
            </div>

            <div className='flex gap-4'>
              <button className='select-btn'>Refresh</button>
              <button className='select-btns'>Create</button>
            </div>

          </div>

          <div className='mt-4'>
            <div className='flex justify-between'>
              <p className='text-zinc-400'>Name</p>
              <p className='text-zinc-400'>Status</p>
              <p className='text-zinc-400'>24h Change</p>
              <p className='text-zinc-400'>Current Price</p>
            </div>

            <div className='flex mt-5 items-center justify-between'>
              <div className='flex gap-4'>
                <img src={texnika} alt="texnika-img" width={32} height={32} />
                <div>
                  <p><strong>Macbook Pro 16 inch (2020) For Sale</strong></p>
                  <p>Base</p>
                </div>
              </div>

              <div className='flex gap-2 items-center'>
                <p className='instock'></p>
                <p>Instock</p>
              </div>
              <p><strong>-$3,244.00</strong></p>

              <div className='flex'>
                <img src={arrow} alt="arrow-img" width={20} height={20} />
                <p className='text-red-600'>$52,221.00</p>
              </div>
            </div>
            <hr className='mt-4 text-zinc-400' />

            <div className='flex mt-5 items-center justify-between'>
              <div className='flex gap-4'>
                <img src={texnika} alt="texnika-img" width={32} height={32} />
                <div>
                  <p><strong>Gaming Chair, local pickup only</strong></p>
                  <p>Base</p>
                </div>
              </div>

              <div className='flex gap-2 items-center mx-3'>
                <p className='instock'></p>
                <p>Instock</p>
              </div>
              <p><strong>+$2,212.00</strong></p>

              <div className='flex'>
                <img src={arrows} alt="arrows-img" width={20} height={20} />
                <p className='text-green-400'>$52,221.00</p>
              </div>
            </div>
            <hr className='mt-4 text-zinc-400' />

            <div className='flex mt-5 items-center justify-between'>
              <div className='flex gap-4'>
                <img src={texnika} alt="texnika-img" width={32} height={32} />
                <div>
                  <p><strong>Brand New Bike, Local buyer only</strong></p>
                  <p>Base</p>
                </div>
              </div>

              <div className='flex gap-2 items-center'>
                <p className='instock'></p>
                <p>Instock</p>
              </div>
              <p><strong>-$2,212.00</strong></p>

              <div className='flex'>
                <img src={arrow} alt="arrow-img" width={20} height={20} />
                <p className='text-red-600'>$52,221.00</p>
              </div>
            </div>
            <hr className='mt-4 text-zinc-400' />

            <div className='flex mt-5 items-center justify-between'>
              <div className='flex gap-4'>
                <img src={texnika} alt="texnika-img" width={32} height={32} />
                <div>
                  <p><strong>Dell Computer Monitor</strong></p>
                  <p>Base</p>
                </div>
              </div>

              <div className='flex gap-2 items-center mx-5'>
                <p className='instock-yelow'></p>
                <p>Low</p>
              </div>
              <p><strong>+$2,212.00</strong></p>

              <div className='flex'>
                <img src={arrows} alt="arrows-img" width={20} height={20} />
                <p className='text-green-500'>$52,221.00</p>
              </div>
            </div>
            <hr className='mt-4 text-zinc-400' />

            <div className='flex mt-5 items-center justify-between'>
              <div className='flex gap-4'>
                <img src={texnika} alt="texnika-img" width={32} height={32} />
                <div>
                  <p><strong>Playstation 4 Limited Edition (with game)</strong></p>
                  <p>Base</p>
                </div>
              </div>

              <div className='flex gap-2 items-center'>
                <p className='instock-red'></p>
                <p>Out of Stock</p>
              </div>
              <p><strong>-$2,212.00</strong></p>

              <div className='flex'>
                <img src={arrow} alt="arrow-img" width={20} height={20} />
                <p className='text-red-600'>$52,221.00</p>
              </div>
            </div>
            <hr className='mt-4 text-zinc-400' />
          </div>

        </div>

        <div className='mt-4 flex justify-between'>
          <div className='gameing-box'>
            <h3><strong>Gaming</strong></h3>
            <div className='flex gap-3 mt-3'>
              <img src={game} alt="game-img" width={32} height={32} />
              <div className='flex gap-2'>
                <div>
                  <p>51%</p>
                  <p className='big'></p>
                </div>
                <div>
                  <p>31%</p>
                  <p className='middel'></p>
                </div>
                <div>
                  <p>18%</p>
                  <p className='smmal'></p>
                </div>
              </div>
            </div>
          </div>

          <div className='gameing-box'>
            <h3><strong>Social Media</strong></h3>
            <div className='flex gap-3 mt-3'>
              <img src={social} alt="social-img" width={32} height={32} />
              <div className='flex gap-2'>
                <div>
                  <p>51%</p>
                  <p className='big'></p>
                </div>
                <div>
                  <p>31%</p>
                  <p className='middel'></p>
                </div>
                <div>
                  <p>18%</p>
                  <p className='smmal'></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='main-transaction mt-4'>
        <h3 className='text-3xl'>Transaction</h3>
        <div className='flex justify-between mt-3'>
          <p className='text-zinc-400'>Transaction</p>
          <p>$62,000</p>
        </div>

        <div className='flex gap-1'>
          <p className='big'></p>
          <p className='middels'></p>
          <p className='smmal'></p>
          <p className='smals'></p>
        </div>

        <div className='category-box'>
          <div className='flex items-center gap-4'>

            <div className='flex items-center gap-4'>
              <img src={category} alt="category-img" width={36} height={36} />
              <div>
                <p>61%</p>
                <p>Category</p>
              </div>
            </div>

            <img src={line} alt="line-img" width={2} height={35} />

            <div className='flex items-center gap-4'>
              <img src={category} alt="category-img" width={36} height={36} />
              <div>
                <p>51%</p>
                <p>Category</p>
              </div>
            </div>

          </div>

          <div className='flex items-center gap-4 mt-5'>

            <div className='flex items-center gap-4'>
              <img src={category} alt="category-img" width={36} height={36} />
              <div>
                <p>61%</p>
                <p>Category</p>
              </div>
            </div>

            <img src={line} alt="line-img" width={2} height={35} />

            <div className='flex items-center gap-4'>
              <img src={category} alt="category-img" width={36} height={36} />
              <div>
                <p>51%</p>
                <p>Category</p>
              </div>
            </div>

          </div>
        </div>

        <div className='mt-4'>
          <div className='flex justify-between'>
            <h3 className='text-2xl'>Sep 2023</h3>
            <img src={click} alt="click" width={56} height={24} />
          </div>

          <div className='calendar-wrap mt-4'>
            <div className='flex items-center justify-between px-4 py-3'>
              <p className='text-zinc-300'>Sun</p>
              <p className='text-zinc-300'>Mon</p>
              <p className='text-zinc-300'>Tue</p>
              <p className=''>Wed</p>
              <p className='text-zinc-300'>Thu</p>
              <p className='text-zinc-300'>Fri</p>
              <p className='text-zinc-300'>Sat</p>
            </div>
            <div className='flex items-center justify-between mt-1 px-4 pb-3'>
            <p className='text-zinc-300'>18</p>
            <p className='text-zinc-300'>18</p>
            <p className='text-zinc-300'>18</p>
            <p className='bg-white'><strong>18</strong></p>
            <p className='text-zinc-300'>18</p>
            <p className='text-zinc-300'>18</p>
            <p className='text-zinc-300'>18</p>
          </div>
          </div>

          <div className='diagrama-wrap p-4'>
            <div className='green-box'>
              <div className='green'>
                <p className='white'></p>
              </div>
              <div className='pink'>
                <p className='white'></p>
              </div>
            </div>

            <div className='pink-box'>
              <div className='green'>
                <p className='white'></p>
              </div>
              <div className='pinka'>
                <p className='white'></p>
              </div>
              <div className='greena'>
                <p className='white'></p>
              </div>
            </div>

            <div className='yellow-box'>
              <div className='yellow'>
                <p className='white'></p>
              </div>
              <div className='pinkb'>
                <p className='white'></p>
              </div>
            </div>

            <div className='timer-box'>
              <p>:<strong>00</strong></p>
              <p><strong>12:00</strong></p>
              <p><strong>13:00</strong></p>
              <p><strong>14:00</strong></p>
              <p><strong>15:</strong></p>
            </div>

            <div className='mt-4 flex items-center justify-between'>
              <div className='flex gap-2 items-center'>
                <p className='sm-green'></p>
                <p>Daily Checking</p>
              </div>

              <div className='flex gap-2 items-center'>
                <p className='sm-pink'></p>
                <p>Weekly Job</p>
              </div>

              <div className='flex gap-2 items-center'>
                <p className='sm-yellow'></p>
                <p>Monthly</p>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default main