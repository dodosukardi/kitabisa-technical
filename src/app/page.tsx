'use client'
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Card from '@/components/Card';
import CardSkeleton from '@/components/Card/CardSkeleton';
import Dropdown from '@/components/Dropdown';

const Home = () => {
  const [campaignList, setCampaignList] = useState<any>(null);
  const [isFetch, setIsFetch] = useState(true);
  const [selectedSort, setSelectedSort] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/campaign');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCampaignList(data?.data);
        setIsFetch(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsFetch(false);
      }
    };

    fetchData();
  }, []);

  const sortData = async (sort: any) => {
    setIsFetch(true);

    let sortedArray = [...campaignList];
    if (sort.value === 'donation_target') {
      sortedArray = await campaignList.sort((a: any, b: any) => b.donation_target - a.donation_target);
    } else if (sort.value === 'days_remaining') {
      sortedArray = await campaignList.sort((a: any, b: any) => b.days_remaining - a.days_remaining);
    } else if (sort.value === 'donation_received') {
      sortedArray = await campaignList.sort((a: any, b: any) => b.donation_received - a.donation_received);
    }

    setSelectedSort(sort);
    setCampaignList(sortedArray);
    setIsFetch(false);
  }

  return (
    <div className="container xl:w-[1300px] block p-8 bg-gray-50 h-full">
      <Header />
      <div className="flex flex-row-reverse">
        <Dropdown
          placeholder="Urutkan"
          options={[
            {
              label: 'Target Donasi',
              value: 'donation_target'
            }, {
              label: 'Sisa hari',
              value: 'days_remaining'
            }, {
              label: 'Donasi Terkumpul',
              value: 'donation_received'
            }
          ]}
          selectedOption={selectedSort}
          onClick={(sort: any) => sortData(sort)}
          icon="/sort.png"
        />
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 gap-4 py-4">
        {isFetch ? (
          <>
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </>
        ) : (
          <>
            {campaignList?.map((campaign: any, index: number) => (
              <div key={`campaign-${index}`}>
                <Card
                  image={campaign.image}
                  shorturl=""
                  title={campaign.title}
                  percentage={campaign.donation_percentage}
                  target={campaign.donation_target}
                  received={campaign.donation_received}
                  daysRemaining={campaign.days_remaining}
                />
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default Home;
