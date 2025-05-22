export const DEFAULT_PRETEXT_SOURCE = `<pretext xml:lang="en-US" xmlns:xi="http://www.w3.org/2001/XInclude">
<docinfo />
<book xml:id="hello-world">
	<title>Cool Article</title>
	<chapter>
		<title>The first title!</title>
		<section>
			<title>Important!</title>
			<introduction>
				<title>My Intro</title>
				<p>Hello, World!</p>
				<definition xml:id="mydef">
					<title>The Good Dog</title>
					<statement>A <term>Good Dog</term> is a dog that sits.</statement>
				</definition>
			</introduction>
			<subsection xml:id="subsec">
				<title>My Sub</title>
				<p>The contents of the subsection</p>
    				<p>Some math: 
			        	<m>
			        		\displaystyle\frac{1}{\sqrt{2\pi\sigma^2}}
			        		\int_{-\infty}^\infty {e^{-\frac{(x-\mu)^2}{2\sigma^2}}\;dx}=1
			        	</m>
			        </p>
			</subsection>
			<conclusion>
				<p>And stuff</p>
			</conclusion>
		</section>
		<section>
			<p>Again here</p>
			<p>Some more. See <xref ref="mydef" />
			or <xref ref="subsec" /></p>
		</section>
	</chapter>
</book>
</pretext>
`;
