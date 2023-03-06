# briochure-cms
 Your local input - Localization and Storyboarding - Briochure CMS

# TODO(David):
* Chore(David): generate database types from supabase cli [[DONE]]
* NOTE(Actions): write scripts for testing [[TODO]]

Flankmain
@Flankmain
2 weeks ago
Available [online.]: https://www.youtube.com/watch?v=PLeJYFUBhbU
``` Python readme.py
Prime also watched the Casey Muratori optimization lecture. The complexity thing has to do with both of these. Casey and Jon know eachother and worked together on The Witness. Having watched most of both their highlights on youtube, I think an assumption that they both make is that almost always it would be better to use less abstraction and severely limit your use of external libraries when trying to make performant, high quality software. The most important argument is that you're using the right tool for the right job, and it's your job as a developer to make the right tool, which is often far simpler than people think of and supports deep understanding of how your system actually works, instead of handwaving library calls. Here's a comparative list of the pros and cons I wrote yesterday:

writing your own implementation
	+/- requires studying the problem domain
	+ if done well, eliminates complexity
	- takes time
	- result might not be the highest quality
        - changing requirements make using an existing library seem attractive
	+/-  this is the careful approach

using an existing library
	- you might have unknown invisible dependencies on e.g. system state
	- requires learning
        + the interfaces can be better limited to your problem domain
	+ having other people maintain non-trivial changes is ideal (like graphics drivers or something)
	+ more time working on the non-trivial parts of your program
	+ quicker to market
	- risky, though the risk can be mitigated through reasoning that you actually need to write your own implementation
        - cheaper in the short term
	- external dependencies can lead to your program having uncontrollable technical debt.
	- you might not understand what you are depending on
	- often the thing you need doesn't really exist or it doesn't match some quality you are looking for.


suggested strategies to deal with this
	if possible, question what is the maximum possible problem domain it may affect
		e.g. some enemy movement script vs enabling operator overloading for your new programming language through some library
	popularity can be good, but is not a guarantee of quality
        avoid bloating your dependencies without reason
	understand what you actually need
	be critical of any new libraries
		at least review what it is
	very often the thing you use is not as complicated as you may thing.
		(case and point, JS libraries that are like 10 lines and downloaded a 300k times)
	it's possible to pivot from an existing library to your own sometimes, if need be.
		unit tests for this are actually really useful
		every part of your program that uses and is covered works
		if the thing already has unit tests you may pick the subset that applies to your problem domain and perhaps translate them to use the new interfaces 
```

John Ingles
@John Ingles
2 weeks ago
Available [online.]: https://www.youtube.com/watch?v=PLeJYFUBhbU
``` Python readme.py
I think the issue is that software getting more and more complex because we want it to do more and more things and we want it to be able to evolve over time.  This complexity requires more abstraction and standards that lead to a lot of boiler plate.  A lot of people don't like OOP because of this.  However, complex, scalable software requires teams of people to manage.  These teams need the abstraction to have any hope of managing and scaling the software. 
```
Mildly Musical
@Mildly Musical
2 weeks ago
Available [online.]: https://www.youtube.com/watch?v=PLeJYFUBhbU
``` Python readme.py
[I] think that one of the major points jonathan missed is , software is easier to fix , if your app crashes or there is a bug on your server side , it is easier to deploy but if it is a hardware issue you have already lost a lot of money in the law suite like butterfly switches in mac , they have to fix it for the people who bought it , for free. Hence the margin of error in software is a lot more than it is for hardware
```

Andy The Dishwasher
@Andy The Dishwasher
Available [online.]: https://www.youtube.com/watch?v=PLeJYFUBhbU
10 days ago
``` Python readme.py
You do have a very valid point about the comfort layer introduced by modern CI/CD pipelines and other rapid re-deployment strategies. When you can ship a patch with a quick CLI command, you're not sweating very hard when you hit commit.
```

Bhanukamax
@Bhanukamax
Available [online.]: https://www.youtube.com/watch?v=PLeJYFUBhbU
12 days ago
``` Python readme.py
His statement regarding it's all just hardware improvements is true if we were still writing all the software in BASIC or something, but as you said our software tool kit has improved a lot. But the overall message is true regarding software is kind of expected to be buggy, but maybe that's one compromise to keep software devs alive and away from burnout :) so we can have more better things tomorrow, I think with all these AI tech coming up we'll figure something out for software quality too, maybe AI driven linters for catching bad logic, etc.
```