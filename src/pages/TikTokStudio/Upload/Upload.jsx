
import classNames from 'classnames/bind';

import style from './Upload.module.scss';
import img_uploadVideo from '~/assets/images/uploadVideo.svg';
import Button from '~/components/Button';
import { IconCapCut, IconFile, IconFps, IconLight, IconVideo } from '~/components/Icons';
import Image from '~/components/img/Image';


const video_suggestion = [
    {
        icon: <IconVideo />,
        title: 'Capacity and duration',
        description: 'Maximum capacity: 10 GB, video duration: 60 minutes.',
    },
    {
        icon: <IconFile />,
        title: 'File format',
        description: 'Recommended: “.mp4”. Other major formats supported.',
    },
    {
        icon: <IconFps />,
        title: 'Video resolution',
        description: 'Recommended high resolution: 1080p, 1440p, 4K.',
    },
    {
        icon: <IconLight />,
        title: 'Aspect ratio',
        description: 'Recommended: 16:9 for landscape mode, 9:16 for portrait mode.',
    },
];

const cx = classNames.bind(style);
function Upload() {

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('card-1')}>
                    <div className={cx('select-video-container')}>
                        <Image src={img_uploadVideo} alt="Upload Video" className={cx('img-upload-video')} />
                        <h3 className={cx('upload-stage-title')}>Select Video To Upload</h3>
                        <p className={cx('upload-stage-sub-title')}>Or drag and drop here</p>
                        <Button primary className={cx('upload-stage-btn')}>
                            Select Video
                        </Button>
                    </div>

                    <div className={cx('video-suggestion')}>
                        {video_suggestion.map((item, index) => (
                            <div className={cx('video-sgt-items')} key={index}>
                                <div className={cx('card-1-icon')}>{item.icon}</div>

                                <div className={cx('video-sgt-content')}>
                                    <h4 className={cx('card-1-title')}>{item.title}</h4>
                                    <p className={cx('card-1-description')}>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={cx('card-2')}>
                    <div>
                        <p className={cx('card-2-title')}>Create high quality videos on CapCut Online</p>
                        <p className={cx('card-2-description')}>
                            Automatically trim your videos and create videos from scripts with AI-powered features.
                        </p>
                    </div>
                    <Button iconLeft={<IconCapCut width="1.6rem" height="1.6rem" />} className={cx('card-2-btn')}>
                        Try it now
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default Upload;
