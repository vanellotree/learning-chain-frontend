import NotificationItem from './NotificationItem';

export default {
  title: 'Patterns/NotificationItem',
  component: NotificationItem,
};

export const all = () => (
  <>
    <div>활성화</div>
    <br />
    <NotificationItem
      title={'🔔테스트 알림 제목'}
      paragraph={
        '테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.'
      }
      active={true}
      date={new Date()}
    />
    <br />
    <br />
    <div>비활성화</div>
    <br />
    <NotificationItem
      title={'🔔테스트 알림 제목'}
      paragraph={
        '테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다. 테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.테스트 중인 단락입니다.'
      }
      active={false}
      date={new Date(new Date().getTime() - 90000000)}
    />
    <br />
  </>
);
