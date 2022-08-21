import Avatar from './Avatar';

export default {
  title: 'Commons/Avatar',
  component: Avatar,
};

export const all = () => (
  <>
    <div>leftIconAvater</div>
    <br />
    <Avatar
      pattern={'leftIconAvater'}
      icon={
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.49197 3.73134C3.51863 3.68029 3.54163 3.63807 3.56316 3.59511C4.1261 2.45983 4.68928 1.32455 5.25124 0.188532C5.30335 0.082736 5.36989 0.00124126 5.4976 1.39294e-05C5.62531 -0.0012134 5.69528 0.0788085 5.74885 0.183132C5.95974 0.594042 6.17185 1.00446 6.38347 1.41488C6.75632 2.13802 7.12892 2.86092 7.50201 3.58406C7.51865 3.61622 7.53773 3.64715 7.56293 3.69084C7.60892 3.66531 7.65076 3.64347 7.69112 3.61917C8.64159 3.046 9.5918 2.47235 10.542 1.89894C10.5804 1.87587 10.6186 1.85107 10.6595 1.8334C10.8327 1.75829 11.0105 1.882 10.9995 2.07027C10.9966 2.11888 10.9851 2.16723 10.9753 2.21535C10.6073 4.0313 10.2391 5.84726 9.87095 7.66322C9.86116 7.71133 9.85284 7.75993 9.83792 7.80657C9.79853 7.92832 9.71755 7.99804 9.58544 7.99926C9.54459 7.99951 9.50397 8 9.46312 8C6.82091 8 4.17894 8 1.53673 8C1.23801 8 1.18884 7.95974 1.12865 7.66371C0.757767 5.83573 0.387368 4.00774 0.0162351 2.17975C-0.00553864 2.07199 -0.0189943 1.96792 0.0681008 1.88102C0.159844 1.78922 0.274095 1.78823 0.425533 1.87979C1.03349 2.24677 1.64095 2.61423 2.24841 2.98169C2.61857 3.20556 2.98848 3.42967 3.35863 3.65353C3.39973 3.67832 3.44157 3.70189 3.49221 3.73134H3.49197Z"
            fill="white"
          />
        </svg>
      }
    />
    <br />
    <br />
    <Avatar
      pattern={'leftIconAvater'}
      useImg={'/testlink'}
      icon={
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.49197 3.73134C3.51863 3.68029 3.54163 3.63807 3.56316 3.59511C4.1261 2.45983 4.68928 1.32455 5.25124 0.188532C5.30335 0.082736 5.36989 0.00124126 5.4976 1.39294e-05C5.62531 -0.0012134 5.69528 0.0788085 5.74885 0.183132C5.95974 0.594042 6.17185 1.00446 6.38347 1.41488C6.75632 2.13802 7.12892 2.86092 7.50201 3.58406C7.51865 3.61622 7.53773 3.64715 7.56293 3.69084C7.60892 3.66531 7.65076 3.64347 7.69112 3.61917C8.64159 3.046 9.5918 2.47235 10.542 1.89894C10.5804 1.87587 10.6186 1.85107 10.6595 1.8334C10.8327 1.75829 11.0105 1.882 10.9995 2.07027C10.9966 2.11888 10.9851 2.16723 10.9753 2.21535C10.6073 4.0313 10.2391 5.84726 9.87095 7.66322C9.86116 7.71133 9.85284 7.75993 9.83792 7.80657C9.79853 7.92832 9.71755 7.99804 9.58544 7.99926C9.54459 7.99951 9.50397 8 9.46312 8C6.82091 8 4.17894 8 1.53673 8C1.23801 8 1.18884 7.95974 1.12865 7.66371C0.757767 5.83573 0.387368 4.00774 0.0162351 2.17975C-0.00553864 2.07199 -0.0189943 1.96792 0.0681008 1.88102C0.159844 1.78922 0.274095 1.78823 0.425533 1.87979C1.03349 2.24677 1.64095 2.61423 2.24841 2.98169C2.61857 3.20556 2.98848 3.42967 3.35863 3.65353C3.39973 3.67832 3.44157 3.70189 3.49221 3.73134H3.49197Z"
            fill="white"
          />
        </svg>
      }
    />
    <br />
    <br />
    <div>noneIconAvater</div>
    <br />
    <Avatar pattern={'noneIconAvater'} />
    <br />
    <Avatar pattern={'noneIconAvater'} useImg={'/testlink'} />
    <br />
    <div>rightIconAvater</div>
    <br />
    <Avatar
      pattern={'rightIconAvater'}
      icon={
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.49197 3.73134C3.51863 3.68029 3.54163 3.63807 3.56316 3.59511C4.1261 2.45983 4.68928 1.32455 5.25124 0.188532C5.30335 0.082736 5.36989 0.00124126 5.4976 1.39294e-05C5.62531 -0.0012134 5.69528 0.0788085 5.74885 0.183132C5.95974 0.594042 6.17185 1.00446 6.38347 1.41488C6.75632 2.13802 7.12892 2.86092 7.50201 3.58406C7.51865 3.61622 7.53773 3.64715 7.56293 3.69084C7.60892 3.66531 7.65076 3.64347 7.69112 3.61917C8.64159 3.046 9.5918 2.47235 10.542 1.89894C10.5804 1.87587 10.6186 1.85107 10.6595 1.8334C10.8327 1.75829 11.0105 1.882 10.9995 2.07027C10.9966 2.11888 10.9851 2.16723 10.9753 2.21535C10.6073 4.0313 10.2391 5.84726 9.87095 7.66322C9.86116 7.71133 9.85284 7.75993 9.83792 7.80657C9.79853 7.92832 9.71755 7.99804 9.58544 7.99926C9.54459 7.99951 9.50397 8 9.46312 8C6.82091 8 4.17894 8 1.53673 8C1.23801 8 1.18884 7.95974 1.12865 7.66371C0.757767 5.83573 0.387368 4.00774 0.0162351 2.17975C-0.00553864 2.07199 -0.0189943 1.96792 0.0681008 1.88102C0.159844 1.78922 0.274095 1.78823 0.425533 1.87979C1.03349 2.24677 1.64095 2.61423 2.24841 2.98169C2.61857 3.20556 2.98848 3.42967 3.35863 3.65353C3.39973 3.67832 3.44157 3.70189 3.49221 3.73134H3.49197Z"
            fill="white"
          />
        </svg>
      }
    />
    <br />
    <Avatar
      pattern={'rightIconAvater'}
      useImg={'/testlink'}
      icon={
        <svg
          width="11"
          height="8"
          viewBox="0 0 11 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.49197 3.73134C3.51863 3.68029 3.54163 3.63807 3.56316 3.59511C4.1261 2.45983 4.68928 1.32455 5.25124 0.188532C5.30335 0.082736 5.36989 0.00124126 5.4976 1.39294e-05C5.62531 -0.0012134 5.69528 0.0788085 5.74885 0.183132C5.95974 0.594042 6.17185 1.00446 6.38347 1.41488C6.75632 2.13802 7.12892 2.86092 7.50201 3.58406C7.51865 3.61622 7.53773 3.64715 7.56293 3.69084C7.60892 3.66531 7.65076 3.64347 7.69112 3.61917C8.64159 3.046 9.5918 2.47235 10.542 1.89894C10.5804 1.87587 10.6186 1.85107 10.6595 1.8334C10.8327 1.75829 11.0105 1.882 10.9995 2.07027C10.9966 2.11888 10.9851 2.16723 10.9753 2.21535C10.6073 4.0313 10.2391 5.84726 9.87095 7.66322C9.86116 7.71133 9.85284 7.75993 9.83792 7.80657C9.79853 7.92832 9.71755 7.99804 9.58544 7.99926C9.54459 7.99951 9.50397 8 9.46312 8C6.82091 8 4.17894 8 1.53673 8C1.23801 8 1.18884 7.95974 1.12865 7.66371C0.757767 5.83573 0.387368 4.00774 0.0162351 2.17975C-0.00553864 2.07199 -0.0189943 1.96792 0.0681008 1.88102C0.159844 1.78922 0.274095 1.78823 0.425533 1.87979C1.03349 2.24677 1.64095 2.61423 2.24841 2.98169C2.61857 3.20556 2.98848 3.42967 3.35863 3.65353C3.39973 3.67832 3.44157 3.70189 3.49221 3.73134H3.49197Z"
            fill="white"
          />
        </svg>
      }
    />
  </>
);