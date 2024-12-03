import React from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import type { Review } from '../types';

interface ReviewSectionProps {
  reviews: Review[];
}

export default function ReviewSection({ reviews }: ReviewSectionProps) {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-gray-900">Reviews</h3>
        <div className="flex items-center">
          <Star className="w-5 h-5 text-yellow-400" />
          <span className="ml-1 font-medium">{averageRating.toFixed(1)}</span>
          <span className="ml-1 text-gray-600">({reviews.length} reviews)</span>
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded-lg border border-gray-100 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? 'text-yellow-400' : 'text-gray-200'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">{review.date}</span>
            </div>
            <p className="mt-2 text-gray-700">{review.comment}</p>
            <div className="mt-3 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="font-medium mr-2">Professionalism:</span>
                <span>{review.metrics.professionalism}/5</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Responsiveness:</span>
                <span>{review.metrics.responsiveness}/5</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Expertise:</span>
                <span>{review.metrics.expertise}/5</span>
              </div>
            </div>
            <button className="mt-3 flex items-center text-sm text-gray-500 hover:text-blue-600">
              <ThumbsUp className="w-4 h-4 mr-1" />
              Helpful
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}