import Image from 'next/image';
import { Star, ThumbsUp, MessageCircle } from 'lucide-react';

import { Card } from '@/components/ui';
import { Button } from '@/components/ui/button';

interface UmkmReviewsProps {
  umkmId: string;
}

// Mock data ulasan
const mockReviews = [
  {
    id: '1',
    user: {
      name: 'Andi Pratama',
      avatar: '/images/avatar-1.jpg',
      verified: true
    },
    rating: 5,
    date: '2 hari yang lalu',
    content: 'Nasi udduknya enak banget! Lauknya lengkap dan porsinya pas. Harganya juga terjangkau. Recommended banget!',
    helpful: 23,
    images: ['/images/review-1.jpg', '/images/review-2.jpg']
  },
  {
    id: '2',
    user: {
      name: 'Siti Nurhaliza',
      avatar: '/images/avatar-2.jpg',
      verified: true
    },
    rating: 4,
    date: '1 minggu yang lalu',
    content: 'Makanannya enak, tapi pengantaran agak lama. Tapi overall puas dengan rasanya.',
    helpful: 15,
    images: []
  },
  {
    id: '3',
    user: {
      name: 'Budi Santoso',
      avatar: '/images/avatar-3.jpg',
      verified: false
    },
    rating: 5,
    date: '2 minggu yang lalu',
    content: 'Sudah langganan disini, selalu puas dengan pelayanan dan kualitas makanannya. Mantap!',
    helpful: 31,
    images: ['/images/review-3.jpg']
  }
];

export default function UmkmReviews({ umkmId }: UmkmReviewsProps) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Ulasan Pelanggan</h2>
          <div className="flex items-center gap-2 mt-1">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.5</span>
            </div>
            <span className="text-gray-500">·</span>
            <span className="text-gray-600">124 ulasan</span>
          </div>
        </div>
        <Button variant="outline" size="sm">
          Tulis Ulasan
        </Button>
      </div>

      {/* Rating Summary */}
      <Card className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Overall Rating */}
          <div className="text-center">
            <div className="text-4xl font-bold text-red-600 mb-2">4.5</div>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= 4.5
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-600">124 ulasan</p>
          </div>

          {/* Rating Breakdown */}
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center gap-3">
                <div className="flex items-center gap-1 w-12">
                  <span>{rating}</span>
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full"
                    style={{
                      width: `${rating === 5 ? 70 : rating === 4 ? 20 : rating === 3 ? 7 : 2}%`
                    }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-8">
                  {rating === 5 ? 87 : rating === 4 ? 25 : rating === 3 ? 9 : rating === 2 ? 2 : 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Reviews List */}
      <div className="space-y-4">
        {mockReviews.map((review) => (
          <Card key={review.id} className="p-6">
            {/* Review Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Image
                    src={review.user.avatar || '/images/default-avatar.jpg'}
                    alt={review.user.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  {review.user.verified && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-semibold">{review.user.name}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{review.rating}</span>
                    </div>
                    <span>·</span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Content */}
            <p className="text-gray-700 mb-4">{review.content}</p>

            {/* Review Images */}
            {review.images.length > 0 && (
              <div className="flex gap-2 mb-4">
                {review.images.map((image, index) => (
                  <div key={index} className="relative w-20 h-20">
                    <Image
                      src={image}
                      alt={`Review image ${index + 1}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Review Actions */}
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-600">
                <ThumbsUp className="w-4 h-4" />
                <span>Membantu ({review.helpful})</span>
              </button>
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-red-600">
                <MessageCircle className="w-4 h-4" />
                <span>Balas</span>
              </button>
            </div>
          </Card>
        ))}
      </div>

      {/* Load More Reviews */}
      <div className="text-center">
        <Button variant="outline" size="lg" className="rounded-full">
          Muat Lebih Banyak Ulasan
        </Button>
      </div>
    </div>
  );
}