import React from 'react'
import { ChannelList, useChatContext } from 'stream-chat-react'
import { ChannelSearch, TeamChannelList, TeamChannelPreview } from './'
import Cookies from 'universal-cookie'
import HospitalIcon from "../assets/hospital.png"
import LogoutIcon from "../assets/logout.png"

const cookies = new Cookies()

const SideBar = ({logout}) => (
    <div className="channel-list__sidebar">
        <div className="channel-list__sidebar__icon1">
            <div className="icon1__inner">
                <img src={HospitalIcon} alt="Hpospital" width="30" />
            </div>
        </div>
        <div className="channel-list__sidebar__icon2">
            <div className="icon1__inner" onClick={logout}>
                <img src={LogoutIcon} alt="Log" width="30" />
            </div>
        </div>
    </div>
)

const CompneyHeader = () => (
    <div className="channel-list__header">
        <p className="channel-list__header__text">
            My Padger
        </p>
    </div>
)

const ChannelListContainer = () => {
    const logout = () => {
     cookies.remove('token');
     cookies.remove('userId');
     cookies.remove('username');
     cookies.remove('fullName');
     cookies.remove('avatarURL');
     cookies.remove('hashedPassword');
     cookies.remove('phoneNumber');
     window.location.reload()
    }
    return (
        <>
            <SideBar logout={logout} />
            <div className="channel-list__list__wrapper">
                <CompneyHeader />
                <ChannelSearch />
                <ChannelList 
                    filters={{}}
                    channelRenderFilterFn={()=>{}}
                    List={(listProps)=>(
                        <TeamChannelList 
                            {...listProps}
                            type="team "
                        />
                    )}
                    Preview={(previewProps)=>(
                        <TeamChannelPreview 
                            {...previewProps}
                            type="team "
                        />
                    )}
                />
                 <ChannelList 
                    filters={{}}
                    channelRenderFilterFn={()=>{}}
                    List={(listProps)=>(
                        <TeamChannelList 
                            {...listProps}
                            type="messaging "
                        />
                    )}
                    Preview={(previewProps)=>(
                        <TeamChannelPreview 
                            {...previewProps}
                            type="messaging "
                        />
                    )}
                />
            </div>
        </>
    )
}

export default ChannelListContainer
