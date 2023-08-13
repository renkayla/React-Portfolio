import React from 'react';

function Testimonials() {
  return (
    <section className="p-4 bg-rose-100 dark:bg-rose-800">
      <h2 className="text-2xl font-bold mb-4 text-rose-900 dark:text-white">What People Say</h2>
      <div className="space-y-4">
        <blockquote className="p-4 bg-white dark:bg-rose-900 shadow rounded text-rose-900 dark:text-rose-200">
          "Amazing portfolio!" <cite className="block mt-1 font-semibold">- John Doe</cite>
        </blockquote>
        // Add more testimonials in the format above
      </div>
    </section>
  );
}

export default Testimonials;
