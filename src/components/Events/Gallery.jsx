import { useState, useEffect, useRef } from 'react';
import { Row, Col, Card, Carousel, Image, List, Typography, Button, Space, Skeleton, Empty } from 'antd';
import { LeftOutlined, LinkOutlined, FileTextOutlined, PictureOutlined } from '@ant-design/icons';
import { getPhotos } from '../../services/photo';
import { getResources } from '../../services/resource';

const { Title, Paragraph } = Typography;

const MAX_CAROUSEL_HEIGHT = 400; // keep it sane
const THUMB_W = 100;
const THUMB_H = 80;

export default function Gallery({ event, togglePage }) {
  const [photos, setPhotos] = useState([]);
  const [resources, setResources] = useState([]);
  const [loadingPhotos, setLoadingPhotos] = useState(true);
  const [loadingResources, setLoadingResources] = useState(true);
  const carouselRef = useRef(null);

  useEffect(() => {
    if (!event?.event_id) return;

    setLoadingPhotos(true);
    getPhotos(event.event_id)
      .then((res) => setPhotos(Array.isArray(res) ? res : []))
      .catch(() => {})
      .finally(() => setLoadingPhotos(false));

    setLoadingResources(true);
    getResources(event.event_id)
      .then((res) => setResources(Array.isArray(res) ? res : []))
      .catch(() => {})
      .finally(() => setLoadingResources(false));
  }, [event?.event_id]);

  return (
    <div className="container-fluid px-0" style={{ background: '#111' }}>
      <div className="d-flex align-items-center justify-content-between mb-3">
        <Space wrap size="middle">
          <Title level={3} style={{ margin: 0, color: '#fff' }}>
            Gallery
          </Title>
        </Space>
      </div>

      <Row gutter={[16, 16]}>
        {/* Photos */}
        <Col span={24}>
          <Space align="center" size="small" className="mb-2">
            <PictureOutlined style={{ color: '#fff' }} />
            <Title level={4} style={{ margin: 0, color: '#fff' }}>Photos</Title>
          </Space>

          {loadingPhotos ? (
            <Skeleton.Image active style={{ width: '100%', height: 280 }} />
          ) : photos.length === 0 ? (
            <Empty description="No photos uploaded yet" />
          ) : (
            <>
              <Card bordered style={{ background: '#141414', borderColor: '#2a2a2a' }}>
                <Carousel autoplay draggable dots ref={carouselRef}>
                  {photos.map((p, idx) => (
                    <div
                      key={idx}
                      className="d-flex justify-content-center align-items-center"
                      style={{ minHeight: 280 }}
                    >
                      <Image
                        src={p.photo_data}
                        alt={p.caption || `Event photo ${idx + 1}`}
                        preview={false} // disable lightbox
                        style={{
                          maxHeight: MAX_CAROUSEL_HEIGHT,
                          width: '100%',
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                  ))}
                </Carousel>
              </Card>

              {/* Thumbs (click to make photo main) */}
              <div className="d-flex flex-wrap mt-2" style={{ gap: 8 }}>
                {photos.map((p, idx) => (
                  <div
                    key={idx}
                    role="button"
                    onClick={() => carouselRef.current?.goTo?.(idx)}
                    onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && carouselRef.current?.goTo?.(idx)}
                    tabIndex={0}
                    style={{ outline: 'none', cursor: 'pointer' }}
                    aria-label={`Show photo ${idx + 1}`}
                    title={p.caption || `Photo ${idx + 1}`}
                  >
                    <Image
                      src={p.photo_data}
                      alt={p.caption || `Event photo ${idx + 1}`}
                      width={THUMB_W}
                      height={THUMB_H}
                      preview={false} // no preview
                      style={{ objectFit: 'cover', borderRadius: 6 }}
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </Col>

        {/* Resources */}
        <Col span={24}>
          <Space align="center" size="small" className="mb-2">
            <FileTextOutlined style={{ color: '#fff' }} />
            <Title level={4} style={{ margin: 0, color: '#fff' }}>Resources</Title>
          </Space>

          {loadingResources ? (
            <List
              itemLayout="vertical"
              dataSource={[1, 2, 3]}
              renderItem={() => (
                <List.Item>
                  <Skeleton active paragraph={{ rows: 2 }} />
                </List.Item>
              )}
            />
          ) : resources.length === 0 ? (
            <Empty description="No resources yet" />
          ) : (
            <List
              itemLayout="vertical"
              dataSource={resources}
              renderItem={(item, idx) => (
                <List.Item key={idx}>
                  <List.Item.Meta
                    title={
                      <a
                        href={item.file_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#fff' }} // force white title
                      >
                        <Space>
                          <LinkOutlined />
                          <span>{item.title}</span>
                        </Space>
                      </a>
                    }
                    description={
                      item.description ? (
                        <Paragraph style={{ marginBottom: 0, color: '#ddd' }}>
                          {item.description}
                        </Paragraph>
                      ) : null
                    }
                  />
                </List.Item>
              )}
            />
          )}
        </Col>
      </Row>
    </div>
  );
}
