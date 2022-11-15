import {StyledTimeline} from './TimelineStyle'
export default function Timeline(props) {
    const playListNames = Object.keys(props.playlist.playlists)
    return (
        <StyledTimeline>
            {

                playListNames.map((playListName, indexPlaylistName) => {
                    const videos = props.playlist.playlists[playListName]
                    console.log(videos)
                    return (
                        <section key={indexPlaylistName}>
                            <h2>{playListName}</h2>
                            <div>
                                {
                                    videos.map(
                                        (video, indexVideo) => {
                                            return (
                                                <a key={indexVideo} href={video.url}>
                                                    <img src={video.thumb} />
                                                    <span>
                                                        {video.title}
                                                    </span>
                                                </a>

                                            )
                                        }
                                    )
                                }
                            </div>
                        </section>
                    )
                }
                )
            }
        </StyledTimeline>
    )
}