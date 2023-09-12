import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 

import Films from './components/Films';
import Navbar from './components/Navbar';
import List from './components/List';

import './index.css'
import Film from './components/Film';

const Home = () => <h2 className='mt-96'>Movie Hub</h2>;
const NotFound = () => <h2>Not Found</h2>;

const nowPlayingUrl = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const popularUrl = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const topRatedUrl = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
const upcomingUrl = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

const queryClient = new QueryClient();

export default function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Navbar />}>
                <Route path="/" element={<Home />} />
                <Route path="/now-playing" element={<List url={nowPlayingUrl} headline={'Now Playing'} />} />
                <Route path="/popular" element={<List url={popularUrl} headline={'Popular'} />} />
                <Route path="/top-rated" element={<List url={topRatedUrl} headline={'Top Rated'} />} />
                <Route path="/upcoming" element={<List url={upcomingUrl} headline={'Upcoming'} />} />
                <Route path='/:film' element={<Films />} />
                <Route path='/details/:id' element={<Film />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        )
    );

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}  />
        </QueryClientProvider>
    );
}
